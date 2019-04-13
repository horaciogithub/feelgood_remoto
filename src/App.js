import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

/* COMPONENTS */
import Index from './Index/Index';
import AdminPage from './AdminPage/AdminPage';
import TrainerPage from './TrainerPage/TrainerPage';
import UserPage from './UserPage/UserPage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/admin" exact render={() => <AdminPage />} />
        <Route path="/trainer" exact render={() => <TrainerPage />} />
        <Route path="/user" exact render={() => <UserPage />} />
      </BrowserRouter>
    );
  }
}

export default App;
