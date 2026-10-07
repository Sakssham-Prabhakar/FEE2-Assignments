import { useState } from 'react';
import './App.css';
import User from './User';
import Profile from './Profile';
import Products from './Products';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="app-container">
      <User name={name} setName={setName} />
      <Profile name={name} />

      <Products/>
    </div>
  );
}



export default App;