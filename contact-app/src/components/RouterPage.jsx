import React from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Routes, Route, Router } from 'react-router-dom'
import HomePage from './HomePage'
import PostList from './PostList'
import PostWrite from './PostWrite'
import PostRead from './PostRead'
import PostUpdate from './PostUpdate'

const RouterPage = () => {
  return (
    <div>
      <Navbar bg='primary' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/contacts'>연락처</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='contacts' element={<PostList />}></Route>
        <Route path='contacts/write' element={<PostWrite />}></Route>
        <Route path='contacts/:no' element={<PostRead />}></Route>
        <Route path='contacts/update/:no' element={<PostUpdate />}></Route>
      </Routes>
    </div>
  )
}

export default RouterPage