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
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mailadresse</Form.Label>
                <Form.Control type="email" placeholder="Indtast din email" />
                <Form.Text className="text-muted">
                  Vi deler aldrig din email med nogen andre.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicText">
                <Form.Label>Emne</Form.Label>
                <Form.Control type="text" placeholder="Hvad handler det om?" />
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Besked</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Skriv din besked her"
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
