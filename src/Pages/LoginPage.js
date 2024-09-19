import React from "react";
import "./LoginPage.css";
import {
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import GoogleLogo from "../Assets/google-logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginPage Page">
      <div className="Login">
        <img
          className="google"
          src={GoogleLogo}
          onClick={signInWithGoogle}
          alt=""
          rel="noopener noreferrer"
          draggable="false"
        />
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
