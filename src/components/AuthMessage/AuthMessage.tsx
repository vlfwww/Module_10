import React from 'react';
import style from './AuthMessage.module.css';
import { Link } from 'react-router-dom';

const AuthMessage: React.FC = () => {
  return (
    <div className={style.container}>
      <p className={style.signIn}>
        You need to <Link to="/signin">sign in</Link> to be able to create notes.
      </p>
      <p className={style.signUp}>
        Still don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default AuthMessage;
