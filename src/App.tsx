import React, { useState } from 'react';
import { database } from 'config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { Header } from 'components/header/Component';
import './App.css';

export const App = () => {
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
      <Header />
      <form onSubmit={writeToDatabase}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
};
