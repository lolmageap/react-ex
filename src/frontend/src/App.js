import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './function/Home';
import SelectOne from './function/SelectOne';
import CreateBoard from './page/CreateBoard';
import InsertBoard from './page/InsertBoard';
import JoinForm from './page/JoinForm';
import LoginForm from './page/LoginForm';

function App() {
  return (
  <div>
      <Header />
      <Container>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/res" element={<SelectOne />}/> 
        <Route path="/createBoard" element={<CreateBoard />}/> 
        <Route path="/insertBoard" element={<InsertBoard />}/> 
        <Route path="/LoginForm" element={<LoginForm />}/> 
        <Route path="/JoinForm" element={<JoinForm />}/> 
        </Routes>
      </Container>
  </div>

  );
}

export default App;
