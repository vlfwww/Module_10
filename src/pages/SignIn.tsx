import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "./../components/AuthForm/AuthForm";
import AppLayout from "../components/AppLayout/AppLayout";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const success = login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <AppLayout hideSidebar pageType="signin">
      <AuthForm
        title="Sign in into an account"
        subtitle="Enter your email and password to sign in into this app"
        buttonText="Sign In"
        onSubmit={handleSignIn}
        error={error}
        setError={setError}
        pageType="signin"
      />
    </AppLayout>
  );
};

export default SignIn;
