import React from 'react';
import style from './App.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import ContactsContainer from './components/contacts/ContactsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <HeaderContainer/>
        <Navbar />
        <div className={style.appContent}>
          <Route path='/contacts'> <ContactsContainer /></Route>
          <Route path='/login'> <Login /></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
