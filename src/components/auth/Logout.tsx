import React, { FC, useState } from 'react';
import { auth } from 'config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { MAIN } from 'constants/Routes';
import { LogoutInterface } from './Logout.types';

export const Logout: FC<LogoutInterface> = ({ buttonTitle }) => {
  const navigate = useNavigate();
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const logout = async () => {
    try {
      setIsErrorMessage(false);
      await auth.signOut();
      navigate(MAIN);
    } catch (error) {
      setIsErrorMessage(true);
    }
  };

  return (
    <div>
      <button type="button" onClick={logout}>
        {buttonTitle}
      </button>
      {isErrorMessage && <p>logout failed</p>}
    </div>
  );
};
