import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Video from '@common/Video';

const Film = () => (
  <StaticQuery
    query={graphql`
      query FilmQuery {
        allSanityFilm {
          edges {
            node {
              film
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <br />
        <h3>Film</h3>
        <Row>
          {data.allSanityFilm.edges.map(({ node }) => (
            <Col style={{ textAlign: 'center', marginTop: '30px' }}>
              <Card>
                <Card.Body>
                  <Video videoSrcURL={node.film} width={'426'} height="240" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
);

export default Film;
