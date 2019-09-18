import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Video from '@common/Video';

const Castingbilleder = () => (
  <StaticQuery
    query={graphql`
      query CastingbillederQuery {
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
        <h3>Castingbilleder</h3>
        <Button variant="primary">primary</Button>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </Container>
    )}
  />
);

export default Castingbilleder;
