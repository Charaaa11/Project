import React, { useState, useRef, useCallback, useContext } from "react";
import { auth } from "../Data/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../App";

function SigninBlock() {
  const [ShowAuthBlock, setShowAuthBlock] = useContext(Context);
  const Email = useRef();
  const Password = useRef();
  const SigninHandler = (event) => {
    event.preventDefault();
    const data = {
      email: Email.current.value,
      password: Password.current.value,
    };
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="SigninBlock">
      <div className="center">
        <form onSubmit={SigninHandler}>
          <h1>Log in</h1>
          <input type="email" placeholder="enter Email" ref={Email} />
          <input type="password" placeholder="enter password" ref={Password} />
          <button type="submit">log in</button>
          <button onClick={() => setShowAuthBlock(false)}>close</button>
        </form>
      </div>
    </div>
  );
}

export default SigninBlock;
