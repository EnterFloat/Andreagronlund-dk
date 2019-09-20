import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Row,
  Col,
  Container as BootstrapContainer,
  Table,
} from 'react-bootstrap';

const Cv = () => (
  <StaticQuery
    query={graphql`
      query CvQuery {
        allSanityGeneral(limit: 1) {
          edges {
            node {
              cvimage {
                asset {
                  fluid(maxWidth: 872, maxHeight: 981) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
        allSanityFilmandtv(limit: -1) {
          edges {
            node {
              year
              title
              role
              producer
              instructor
            }
          }
        }
        allSanityOther(limit: -1) {
          edges {
            node {
              title
              description
            }
          }
        }
        allSanityTheater(limit: -1) {
          edges {
            node {
              title
              year
              role
              instructor
              organiser
            }
          }
        }
        allSanityEducation(limit: -1) {
          edges {
            node {
              title
              year
              teacher
              description
            }
          }
        }
      }
    `}
    render={data => (
      <BootstrapContainer key="container">
        {data.allSanityGeneral.edges.map(({ node }) => (
          <>
            <Row>
              <Col>
                <br />
                <h2>CV</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 8, offset: 2 }}
                sm={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                style={{ marginBottom: 30 }}
              >
                <Img key={'Image'} fluid={node.cvimage.asset.fluid} />
              </Col>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Titel</th>
                      <th>Rolle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.allSanityFilmandtv.edges.map(({ node }) => (
                      <tr>
                        <td>{node.title}{" - ("}{node.year}{")"}</td>
                        <td>{node.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        ))}
      </BootstrapContainer>
    )}
  />
);

export default Cv;
