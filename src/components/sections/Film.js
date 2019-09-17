import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Video from '@common/Video';

const Film = () => (
  <StaticQuery
    query={graphql`
      query FilmQuery {
        allSanityGeneral(limit: 1) {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <h3>Film</h3>
        <Button variant="primary">primary</Button>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Container>
    )}
  />
);

export default Film;
