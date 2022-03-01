import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Home from './pages/Home';
import Login from './pages/Login'
import Error from './components/Error'
import Header from './components/Header';
import Footer from './components/Footer';
import User from './pages/User';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route exact path="/profile" element={<User />}></Route>   
          <Route path="*" element={<Error />} ></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


