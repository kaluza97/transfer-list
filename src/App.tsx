import React, { useState } from 'react';
import { database } from './config/firebase.config';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const Push = () => {
    database
      .ref('user')
      .set({
        name,
        age,
      })
      .catch(alert);
  };

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <input placeholder="Enter your name" value={name} onChange={handleChangeName} />
      <input placeholder="Enter your age" value={age} onChange={handleChangeAge} />
      <button type="button" onClick={Push}>
        PUSH
      </button>
    </div>
  );
}

export default App;
