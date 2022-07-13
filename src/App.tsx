import React, { useState } from 'react';
import { database } from 'config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import './App.css';

function App() {
  const [value, setValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const writeToDatabase = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addDoc(collection(database, 'users'), {
      first: 'Anastasia',
      last: 'Tokarenko',
      born: 1999,
    });
  };

  return (
    <div>
      <form onSubmit={writeToDatabase}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
}
export default App;
