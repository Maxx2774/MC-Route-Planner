import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { supabase } from "./client.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsx";

import styles from "../../css-modules/auth/form.module.css";

export default function Form() {
  const { setToken } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const signIn = location.pathname === "/" || location.pathname === "/signin";

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const validForm = () => {
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    if (
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== "" &&
      password.length >= 6
    ) {
      if (password === confirmPassword) {
        return true;
      }
    }
    return false;
  };

  async function handleSignUp(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    if (validForm()) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              username: username,
            },
          },
        });
        if (!error) {
          alert("Sign-up successfull");
          emailRef.current.value = "";
          usernameRef.current.value = "";
          passwordRef.current.value = "";
          confirmPasswordRef.current.value = "";
          navigate("/");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      console.log("invalid form");
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      setToken(data);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={signIn ? handleSignIn : handleSignUp}
      autoComplete="on"
    >
      {signIn ? (
        <>
          <input
            name="email"
            type="text"
            placeholder="Email"
            required
            autoComplete="email"
            ref={emailRef}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            ref={passwordRef}
          />
        </>
      ) : (
        <>
          <input type="text" placeholder="Email" required ref={emailRef} />
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            autoComplete="email"
            ref={usernameRef}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="new-password"
            ref={passwordRef}
          />
          <input
            name="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
            autoComplete="new-password"
            ref={confirmPasswordRef}
          />
        </>
      )}

      <button type="submit"> {signIn ? "Sign in" : "Sign up"}</button>
    </form>
  );
}
