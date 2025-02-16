import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar className='stiky-top p-3' style={{padding:"10px",boxShadow:"20px 20px 20px lightgray "}}>
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}}>
            <Navbar.Brand >
            <i className="fa-solid fa-music fa-xl" style={{color:" #0514e6"}}></i>{' '}
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header