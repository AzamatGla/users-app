import React from 'react';
import {Home} from './components/Home';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <div className="container w-25 mt-5">
          <Home />
        </div>
    </GlobalProvider>
  );
}

export default App;
