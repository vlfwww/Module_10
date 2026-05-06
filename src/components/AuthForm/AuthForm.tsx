import React, { useState } from "react";
import style from "./AuthForm.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import envelopeIcon from "../../assets/images/envelope.svg";
import eyeIcon from "../../assets/images/eye.svg";
import { validateEmail, validatePassword } from "../../utils/validation";
import { AuthFormProps } from "../../types/auth";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  buttonText,
  onSubmit,
  error,
  setError,
  pageType,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useTheme();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const handleFieldChange =
    (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (error) setError("");
    };

  return (
    <div className={style.authPageWrapper} data-theme={theme}>
      <Header pageType="signup" />
      <div className={style.authContainer}>
        <div className={style.authCard}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.subtitle}>{subtitle}</p>

          <form className={style.authForm} onSubmit={(e) => handleFormSubmit(e)}>
            <Input
              label="Email"
              iconSrc={envelopeIcon}
              type="email"
              value={email}
              onChange={handleFieldChange(setEmail)}
              isError={email.length > 0 && !validateEmail(email)}
              isValid={validateEmail(email)}
              errorMessage="Email is not valid"
              pageType={pageType}
              required
            />
            <Input
              label="Password"
              iconSrc={eyeIcon}
              type="password"
              value={password}
              onChange={handleFieldChange(setPassword)}
              isError={password.length > 0 && !validatePassword(password)}
              isValid={validatePassword(password)}
              errorMessage="Incorrect password"
              pageType={pageType}
              required
            />

            <Button className={style.submitButton} textColor="white">
              {buttonText}
            </Button>
          </form>

          {error && <p className={style.errorText}>{error}</p>}

          {pageType === "signin" && (
            <p className={style.footerText}>
              Forgot to create an account?{" "}
              <Link to="/signup" className={style.link}>
                Sign up
              </Link>
            </p>
          )}

          {pageType === "signup" && (
            <>
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthForm;
