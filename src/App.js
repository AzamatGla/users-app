import React from 'react';
import {Home} from './components/Home';
import {Edit} from './components/Edit';
import {Add} from './components/Add';
import {GlobalProvider} from './context/GlobalState';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalProvider>
          <div className="container w-25 mt-5">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/add' component={Add} />
            </Switch>
          </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
