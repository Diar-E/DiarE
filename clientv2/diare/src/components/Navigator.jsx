import React from 'react';
import { Navbar, Nav } from 'bootstrap-4-react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const HomeItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/profile">
      Profile
    </Nav.ItemLink>
    <Nav.ItemLink href="#/entry">
      Entry
    </Nav.ItemLink>
  </React.Fragment>
)

const Navigator = () => {
  return (
    <Navbar expand="md" dark bg="dark" fixed="top">
      <Navbar.Brand href="#">DiarE</Navbar.Brand>
      <Navbar.Toggler target="#navbarsExampleDefault" />
      <Navbar.Collapse id="navbarsExampleDefault">
        <Navbar.Nav mr="auto">
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomeItems />} />
              <Route path='/profile' element={<HomeItems />} />
              <Route path='/entry' element={<HomeItems />} />
            </Routes>
          </HashRouter>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigator;