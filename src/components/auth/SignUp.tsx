import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { MAIN } from 'constants/Routes';
import { setUser } from 'redux/slice/authSlice';

const SignUp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        }),
      );
      navigate(MAIN);
    });
  };

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
