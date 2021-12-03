import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
const Login = () => {
  const signIn = () => {
    // do clever google login shizz...
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Discordikona_lv.png"
          alt="discord"
        />
      </div>
      <div className="btn-center">
        <Button className="signBtn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
