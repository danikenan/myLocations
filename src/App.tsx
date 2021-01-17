import React from 'react';
import './App.css';
import AppContainer from './container/app';
import Store from './context/context';

function App() {
  return (
    <div className="App">
      <Store>
        <AppContainer />
      </Store>

    </div>
  );
}

export default App;
