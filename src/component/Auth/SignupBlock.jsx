import React, { useState, useRef, useEffect } from "react";
import { auth, logout, useAuth as currentuser } from "../Data/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../Data/Firebase";
import { v4 as uuidv4 } from "uuid";
function SignupBlock() {
  const Email = useRef();
  const Password = useRef();
  const currentUser = currentuser();
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) => {
        setusers(snapshot.docs.map((doc) => doc.data()));
      }),
    []
  );
  const SignupHandler = async (event) => {
    event.preventDefault();
    setloading(true);
    const data = {
      email: Email.current.value,
      password: Password.current.value,
    };
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .then(() => {
        const collectionRef = collection(db, "users");
        const payload = { email: data.email, password: data.password };
        addDoc(collectionRef, payload);
      })
      .catch((err) => {
        console.log(err);
      });
    setloading(false);
  };
  async function handleLogout() {
    setloading(true);
    try {
      await logout();
    } catch {
      alert("error!");
    }
    setloading(false);
  }
  return (
    <div className="SigninBlock">
      <div className="center">
        <h1>Signed in as:{currentUser?.email}</h1>
        <form onSubmit={SignupHandler}>
          <h1>Sign Up </h1>
          <input type="email" placeholder="enter Email" ref={Email} />
          <input type="password" placeholder="enter password" ref={Password} />
          <button type="submit" disabled={loading || currentUser}>
            Sign Up
          </button>
        </form>
        <button onClick={handleLogout} disabled={loading || !currentUser}>
          log out
        </button>
        <ul>
          {users.map((user) => {
            return <li key={uuidv4()}>{user.email}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SignupBlock;
