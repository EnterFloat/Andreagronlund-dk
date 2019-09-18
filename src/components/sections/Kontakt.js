import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';
import { Form, Button, Container as BootstrapContainer } from 'react-bootstrap';

const Kontakt = () => (
  <StaticQuery
    query={graphql`
      query kontaktQuery {
        allSanityGeneral(limit: 1) {
          edges {
            node {
              name
              pagetitle
              pagesubtitle
              email
              mobile
              instagram
              dask
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        {data.allSanityGeneral.edges.map(({ node }) => (
          <BootstrapContainer className="col-lg-8">
            <br></br>
            <h2>Kontakt</h2>
            <br></br>
            <Form name="Contact Form" method="POST" data-netlify="true">
              <Form.Group controlId="formBasicText">
                <Form.Label>Navn</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Hvad hedder du?"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mailadresse</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Indtast din email"
                />
                <Form.Text className="text-muted">
                  Vi deler aldrig din email med nogen andre.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Besked</Form.Label>
                <Form.Control
                  name="message"
                  placeholder="Skriv din besked her"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <Form.Group controlId="formBasicHidden">
                <Form.Control
                  type="hidden"
                  name="form-name"
                  value="Contact Form"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send besked
              </Button>
            </Form>
          </BootstrapContainer>
        ))}
      </Container>
    )}
  />
);

export default Kontakt;
