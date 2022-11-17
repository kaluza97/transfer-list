import React, { useState } from 'react';
import { auth } from 'config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { MAIN } from 'constants/Routes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { userLogout } from 'redux/auth/thunk';

export const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const logout = async () => {
    try {
      setIsErrorMessage(false);
      await dispatch(userLogout(auth));
      navigate(MAIN);
    } catch (error) {
      setIsErrorMessage(true);
    }
  };

  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
      {isErrorMessage && <p>logout failed</p>}
    </div>
  );
};
