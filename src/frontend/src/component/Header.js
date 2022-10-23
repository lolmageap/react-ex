import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

  let navigate = useNavigate();

  const createBoard = () =>{
    axios.get("/CreateStory")
    .then(Response => {
      navigate(Response.data);
    })
    .catch(error =>{
      alert("로그인 후 이용해주세요");
    });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <NavLink to='/home' className="navbar-brand" style={{ marginRight: '100px' , marginLeft: '50px' }}>Home</NavLink>
        <NavLink to='/popularPost' className="nav-link" style={{ marginRight: '300px' , marginLeft: '300px' }}>인기 게시물</NavLink>
        <NavLink onClick={createBoard} className="nav-link" style={{ marginRight: '300px' }}>글쓰기</NavLink>
        {/* <NavLink to='/createBoard' className="nav-link" style={{ marginRight: '300px' }}>글쓰기</NavLink> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Sign up" id="navbarScrollingDropdown">
              <NavDropdown.Item href='/joinForm'>회원가입</NavDropdown.Item>
              <NavDropdown.Item href="/loginForm">로그인</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/howlog">
                비밀번호 찾기
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;