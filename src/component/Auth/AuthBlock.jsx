import React, { useContext, useRef, useState } from "react";
import { Context } from "../../App";
import { auth } from "../Data/Firebase";
import db from "../Data/Firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
function AuthBlock() {
  const [ShowAuthBlock, setShowAuthBlock] = useContext(Context);
  const [AuthMessageBox, setAuthMessageBox] = useState([]);
  const Email = useRef();
  const Password = useRef();
  const Name = useRef();
  const LastName = useRef();
  const PasswordConfirm = useRef();
  const [ShowSignUp, setShowSignUp] = useState(true);
  const [ShowSignin, setShowSignin] = useState(false);
  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }
  const SigninHandler = (event) => {
    event.preventDefault();
    const data = {
      email: Email.current.value,
      password: Password.current.value,
    };
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        setShowAuthBlock(false);
      })
      .catch((err) => {
        console.log(err);
        setAuthMessageBox(["Email or Password is Incorrect"]);
      });
  };
  const SignupHandler = (event) => {
    event.preventDefault();
    const data = {
      Name: Name.current.value,
      LastName: LastName.current.value,
      Email: Email.current.value,
      Password: Password.current.value,
      Discription: "",
      Badges: [],
    };
    var ValidPassword = true;
    const PasswordCheckList = [];

    if (
      Name.current.value === "" ||
      LastName.current.value === "" ||
      Email.current.value === "" ||
      Password.current.value === "" ||
      PasswordConfirm.current.value === ""
    ) {
      PasswordCheckList.push("Please Fill Out All The Forms");
      ValidPassword = false;
    } else {
      if (Password.current.value !== PasswordConfirm.current.value) {
        PasswordCheckList.push("Password Needs To Match!");
        ValidPassword = false;
      }
      if (Password.current.value.length <= 7) {
        PasswordCheckList.push("Password Needs Be Longer Than 7 Charachters");
        ValidPassword = false;
      }

      if (Password.current.value.length >= 20) {
        PasswordCheckList.push("Password Needs Be Shorter Than 20 Charachters");
        ValidPassword = false;
      }
      if (!containsNumbers(Password.current.value)) {
        PasswordCheckList.push("Password Needs to Contain at least 1 Number");
        ValidPassword = false;
      }
    }
    if (ValidPassword) {
      createUserWithEmailAndPassword(auth, data.Email, data.Password)
        .then((userCredential) => {
          const collectionRef = collection(db, "users");
          const payload = {
            Name: data.Name,
            LastName: data.LastName,
            Email: data.Email,
            Discription: data.Discription,
            Badges: data.Badges,
            UID: userCredential.user.uid,
          };
          addDoc(collectionRef, payload);
        })
        .catch((err) => {
          console.log(err);
        });
      setShowAuthBlock(false);
    }
    setAuthMessageBox(PasswordCheckList);
  };
  return (
    <div className="AuthBlock">
      <div className="AuthBlock_content">
        <img src="/icons/brand-icon.svg" alt="" />
        <h2>
          {ShowSignUp && "Welcome Back."}
          {ShowSignin && "Join to unlock the best of Tripadvisor."}
        </h2>
        <form onSubmit={ShowSignUp ? SigninHandler : SignupHandler}>
          {ShowSignin && (
            <>
              <div>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  ref={Name}
                  required
                />
              </div>
              <div>
                <label htmlFor="LastName">LastName</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="LastName"
                  ref={LastName}
                  required
                />
              </div>
            </>
          )}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={Email}
            required
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={Password}
            required
          />
          {ShowSignin && (
            <>
              <label htmlFor="passwordConfirm">Confirm Password </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                ref={PasswordConfirm}
                required
              />
            </>
          )}
          <ul>
            {AuthMessageBox.map((msg) => {
              return <li key={msg}>{msg}</li>;
            })}
          </ul>
          <a className="PasswordRecover">Forgot password?</a>
          <button type="submit">
            <span>
              {ShowSignUp && "Sign in"}
              {ShowSignin && "Sign up"}
            </span>
          </button>
        </form>
        <button onClick={() => setShowAuthBlock(false)} className="closebtn">
          <img src="/icons/close.svg" alt="" />
        </button>
        <h3>
          {ShowSignin && "Not a Member?"}
          {ShowSignUp && "Already a member?"}
        </h3>
        <h4>
          <span>
            {ShowSignUp && (
              <button
                className="SignupShow"
                onClick={() => {
                  setShowSignin(true);
                  setShowSignUp(false);
                  setAuthMessageBox([]);
                }}
              >
                Sign up
              </button>
            )}
            {ShowSignin && (
              <button
                className="SignupShow"
                onClick={() => {
                  setShowSignUp(true);
                  setShowSignin(false);
                  setAuthMessageBox([]);
                }}
              >
                Sign in
              </button>
            )}
          </span>
          {ShowSignUp && "to Join Gurmanius Family"}
          {ShowSignin && "using your Gurmanius account."}
        </h4>
      </div>
    </div>
  );
}
export default AuthBlock;
