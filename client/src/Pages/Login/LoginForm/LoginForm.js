import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../../firebase.init";

const LoginForm = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
  const { email, password, username } = data;
  try {
    let userCredential;
    if (hasAccount) {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
      const displayName = userCredential.user.displayName;
      alert("Welcome " + displayName);
      navigate(location.state ? location.state.from : "/");
    } else {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      setHasAccount(true);
      alert("Account Created! " + userCredential.user.displayName);
    }
  } catch (error) {
    setErrorMessage(error.code);
  }
};

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
      {!hasAccount && 
         <Form.Control className="mb-3" 
            type="text"
            name="username"
            placeholder="Username"
            required
            {...register("username", {
              required: true,
            })}
          />
      }
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && (
            <Form.Text className="small text-danger ms-3 mt-2">
              Please enter a valid Email Address
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 14,
            })}
          />
          {errors.password && (
            <Form.Text className="small text-danger ms-3 mt-2">
              Please enter a valid Password (6-14)
            </Form.Text>
          )}
        </Form.Group>
        <p className="text-center text-danger text-capitalize font-monospace fw-bolder ">{errorMessage}</p>
        <Button type="submit" className="gradiant-btn w-100 my-3">
          {hasAccount ? "Login" : "Signup"}
        </Button>
      </Form>
      <p
        className="text-center fw-bold text-primary"
        onClick={() => setHasAccount(!hasAccount)}
      >
        {hasAccount ? "Create new account?" : "Already have an account?"}
      </p>
    </section>
  );
};

export default LoginForm;
