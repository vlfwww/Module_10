import React, { useState } from "react";
import style from "./Auth.module.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import envelopeIcon from "../../assets/images/envelope.svg";
import eyeIcon from "../../assets/images/eye.svg";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  const { theme } = useTheme();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 6+ characters and contain at least one number",
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u: any) => u.email === email)) {
      setError("This email is already registered");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    login({
      access: "fake-access-token-" + Date.now(),
      refresh: "fake-refresh-token-" + Date.now(),
    });
    navigate("/");
  };

  return (
    <div className={style.authPageWrapper} data-theme={theme}>
      <Header pageType="signup" />
      <div className={style.authContainer}>
        <div className={style.authCard}>
          <h1 className={style.title}>Create an account</h1>
          <p className={style.subtitle}>
            Enter your email and password to sign up for this app
          </p>

          <form className={style.authForm} onSubmit={handleSignUp}>
            <Input
              label="Email"
              iconSrc={envelopeIcon}
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error.includes("email")) setError("");
              }}
              isError={error.toLowerCase().includes("email")}
              required
            />
            <Input
              label="Password"
              iconSrc={eyeIcon}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error.includes("Password")) setError("");
              }}
              isError={error.toLowerCase().includes("password")}
              required
            />

            <Button textColor="white">Sign Up</Button>
          </form>

          {error && <p className={style.errorText}>{error}</p>}

          <p className={style.policyText}>
            By clicking continue, you agree to our{" "}
            <span className={style.link}>Terms of Service</span> <br />
            and <span className={style.link}>Privacy Policy</span>
          </p>

          <p className={style.footerText}>
            Already have an account?{" "}
            <Link to="/signin" className={style.link}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
