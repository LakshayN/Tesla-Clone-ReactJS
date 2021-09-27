import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AuthContext from './context/auth-context';
function App() {
  return (
    <div className="App">
      <AuthContext.Provider value={{
          cars : ["Model S", "Model 3", "Model X", "Model Y"] 
      }}>
      <Header />
      </AuthContext.Provider>
      <Home />
    </div>
  );
}

export default App;
