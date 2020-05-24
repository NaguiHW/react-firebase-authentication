import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import { useUser } from 'reactfire';
import './App.css';

function App() {
  const user = useUser();
  return (
    <div className="App">
      {
        user &&
        <Logout />
      }
      {
        !user &&
        <>
          <Signup />
          <Login />
        </>
      }
    </div>
  );
}

export default App;
