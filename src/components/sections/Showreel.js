import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Video from '@common/Video';

const Showreel = () => (
  <StaticQuery
    query={graphql`
      query ShowreelQuery {
        allSanityShowreel {
          edges {
            node {
              showreel
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <br />
        <h3>Showreel</h3>
        <Row>
          {data.allSanityShowreel.edges.map(({ node }) => (
            <Col style={{ textAlign: 'center', marginTop: '30px' }}>
              <Card>
                <Card.Body>
                  <Video videoSrcURL={node.showreel} width={'426'} height="240" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
);

export default Showreel;
