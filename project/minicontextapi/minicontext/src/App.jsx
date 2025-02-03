import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import ContextProvider from './context/ContextProvider'; 
import './App.css';

function App() {
  return (
    <ContextProvider>
      <h1>Login Page</h1> 
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
