import React from 'react';

import { Message } from '@client/ui';
import { magicNumber } from '@lib/magic-number';

import './App.css';

function App() {
  const message = `The magic number of CRA is ${magicNumber()}.`;
  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
}

export default App;
