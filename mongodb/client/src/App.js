import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './utils/auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';

import './css/App.css';

const client = new ApolloClient({
  request: operation => {
      const token = localStorage.getItem('id_token');
      operation.setContext({
          headers: {
              authorization: token ? `Bearer ${token}` : ''
          }
      });
  },
  uri: '/graphql'
});

function App() {

  Auth.checkToken();

  return (
    <ApolloProvider client={client}>
      <Router>
          <div className="page">
            <div className="header">
              <Header />
            </div>

            <div className="content">
              <Switch> 
                <Route 
                  exact path="/"
                  render={() => <Home />} />
                <Route 
                  exact path="/login"
                  render={() => <Login />} />
                  {Auth.loggedIn() === true && (
                    <Route
                      exact path="/account"
                      render={() => <Account />} />
                  )}
              </Switch>
            </div>

            <div className="footer">
              <Footer />
            </div>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
