import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { MAIN } from 'constants/Routes';

const SignUp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <p>in progress</p>;
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export { SignUp };
