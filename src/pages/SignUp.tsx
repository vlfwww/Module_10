import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import AuthForm from "../components/AuthForm/AuthForm";

const SignUp: React.FC = () => {
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    const success = register(email, password);
    if (success) {
      setError("");
      navigate("/");
    } else {
      setError("This email is already registered");
    }
  };

  return (
    <AuthForm
      title="Create an account"
      subtitle="Enter your email and password to sign up for this app"
      buttonText="Sign Up"
      onSubmit={handleSignUp}
      error={error}
      setError={setError}
      pageType="signup"
    />
  );
};

export default SignUp;
