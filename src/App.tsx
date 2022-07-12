import React, { useState } from 'react';
import database from 'config/firebase.config';
import { ref, set } from 'firebase/database';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(10);
  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const writeToDatabase = (e: any) => {
    const uuid = id;
    set(ref(database, `users/${uuid}`), {
      todo,
      uuid,
    });
    setTodo('');
    e.preventDefault();
  };

  return (
    <div>
      <p>baza danych</p>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="submit" onClick={writeToDatabase}>
        submit
      </button>
    </div>
  );
}
export default App;
