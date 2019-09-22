import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

const Castingbilleder = () => (
  <StaticQuery
    query={graphql`
      query CastingbillederQuery {
        allSanityOtherimage {
          edges {
            node {
              otherimage {
                caption
                asset {
                  fluid(maxWidth: 872, maxHeight: 981) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <br />
        <h3>Castingbilleder</h3>
        <Row>
          {data.allSanityOtherimage.edges.map(({ node }) => (
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 4, offset: 0 }}
              xl={{ span: 4, offset: 0 }}
              style={{ textAlign: 'center', marginTop: '30px' }}
            >
              <Card>
                <Card.Body>
                  <Img key="Image" fluid={node.otherimage.asset.fluid} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
);

export default Castingbilleder;
