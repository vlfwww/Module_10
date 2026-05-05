import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Auth.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../context/AuthProvider';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { useTheme } from '../../context/ThemeContext';
import envelopeIcon from '../../assets/images/envelope.svg';
import eyeIcon from '../../assets/images/eye.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { theme } = useTheme();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);

    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={style.authPageWrapper} data-theme={theme}>
      <Header pageType="signin" />
      <div className={style.authContainer}>
        <div className={style.authCard}>
          <h1 className={style.title}>Sign in into an account</h1>
          <p className={style.subtitle}>Enter your email and password to sign in into this app</p>

          <form className={style.authForm} onSubmit={handleSignIn}>
            <Input
              label="Email"
              iconSrc={envelopeIcon}
              type="email"
              value={email}
              isError={error.toLowerCase().includes('email') || error.includes('Invalid')}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              required
            />
            <Input
              label="Password"
              iconSrc={eyeIcon}
              type="password"
              value={password}
              isError={error.toLowerCase().includes('password') || error.includes('Invalid')}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
            />

            <Button type="submit" textColor="white">
              Sign In
            </Button>
          </form>

          {error && <p className={style.errorText}>{error}</p>}

          <p className={style.footerText}>
            Forgot to create an account?{' '}
            <Link to="/signup" className={style.link}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
