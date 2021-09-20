import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import TeslaAccount from './components/TeslaAccount';
import HeaderBlock from './components/HeaderBlock';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Signup from './components/Signup';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        // user is signed out
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            { isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/teslaaccount"/> : <Login />}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/teslaaccount">
            {!user ? (
              <Redirect to="/login"/> 
            ) : (
              <>
                <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                { isMenuOpen && <Menu /> }
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
