import React, { useState } from 'react';
import { database } from 'config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { Logout } from 'components/auth/Logout';
import { Title } from './Styles';

export const Home = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const writeToDatabase = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addDoc(collection(database, 'users'), {
      first: 'Anastasia',
      last: 'Inna',
      born: 1999,
    });
  };
  return (
    <div>
      <Title>Home</Title>
      <form onSubmit={writeToDatabase}>
        <input type="text" value={value} onChange={handleChange} />
        <Logout buttonTitle="logout" />
      </form>
    </div>
  );
};
