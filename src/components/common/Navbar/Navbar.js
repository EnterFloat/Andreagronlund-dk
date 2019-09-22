import React from 'react';

import { StaticQuery, graphql, Link } from 'gatsby';

import { StaticRouter as Router, Route } from 'react-router-dom'

import styled from 'styled-components';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// import { createBrowserHistory } from 'history';

// const history = typeof window !== 'undefined' ? createBrowserHistory() : null;

const MainNavbar = (Component) => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        allSanityGeneral(limit: 1) {
          edges {
            node {
              pagetitle
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allSanityGeneral.edges.map(({ node }) => (
          <Navbar key="Navbar" bg="light" expand="lg" fixed="top">
            <div className="container-fluid">
              <Link
                to={'/'}
                className={'navbar-brand'}
                activeClassName={'active'}
              >
                {node.pagetitle}
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-end">
                  <NavLink
                    to={'/'}
                    className={'nav-link navbar-right'}
                    activeClassName={'active'}
                  >
                    Hjem
                  </NavLink>
                  <NavLink
                    to={'/om-mig'}
                    className={'nav-link navbar-right'}
                    activeClassName={'active'}
                  >
                    Om mig
                  </NavLink>
                   <NavLink
                    to={'/cv'}
                    className={'nav-link navbar-right'}
                    activeClassName={'active'}
                  >
                    CV
                  </NavLink>
                  <StyledNavDropdown
                    title="Media"
                    id="basic-nav-dropdown navbar-right"
                    alignRight="true"
                  >
                    <Link
                      to={'/media/film'}
                      className={'dropdown-item'}
                      activeClassName={'active'}
                    >
                      Film
                    </Link>
                    <Link
                      to={'/media/castingbilleder'}
                      className={'dropdown-item'}
                      activeClassName={'active'}
                    >
                      Castingbilleder
                    </Link>
                    <Link
                      to={'/media/showreel'}
                      className={'dropdown-item'}
                      activeClassName={'active'}
                    >
                      Showreel
                    </Link>
                  </StyledNavDropdown>
                  <NavLink
                    to={'/kontakt'}
                    className={'nav-link navbar-right'}
                    activeClassName={'active'}
                  >
                    Kontakt
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        ))}
        <div>
          <Router>
            <Route path="/" exact component={Component.IndexPage} />
            <Route path="/om-mig" exact component={Component.OmMigPage} />
            <Route path="/cv" exact component={Component.CVPage} />
            <Route path="/media/film"  component={Component.FilmPage} />
            <Route path="/media/castingbilleder"  component={Component.OmMigPage} />
            <Route path="/media/showreel"  component={Component.OmMigPage} />
            <Route path="/kontakt" exact component={Component.KontaktPage} />
          </Router>
        </div>
      </div>
    )}
  />
);

const NavLink = styled(Link)`
  margin-right: 20px;
  margin-left: 20px;
`;
const StyledNavDropdown = styled(NavDropdown)`
  margin-right: 20px;
  margin-left: 20px;
`;

export default MainNavbar;
