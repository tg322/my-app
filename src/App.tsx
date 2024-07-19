import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      setCount(e.target.value.length);
    };
  
    return (
      <div></div>
    );
  
}

export default App;
