import React, { FC } from 'react';
import { auth } from 'config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { MAIN } from 'constants/Routes';

export const Logout: FC<{ buttonTitle: string }> = ({ buttonTitle }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await auth.signOut();
      navigate(MAIN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={logout}>
      {buttonTitle}
    </button>
  );
};
