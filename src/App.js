import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import HeaderBlock from './components/HeaderBlock';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          { isMenuOpen && <Menu />}
          <HeaderBlock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
