import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Video from '@common/Video';

const Showreel = () => (
  <StaticQuery
    query={graphql`
      query ShowreelQuery {
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
        <h3>Showreel</h3>
        <Button variant="primary">primary</Button>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Container>
    )}
  />
);

export default Showreel;
