import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col, Container as BootstrapContainer } from 'react-bootstrap';

const OmMig = () => (
  <StaticQuery
    query={graphql`
      query OmMigQuery {
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
              aboutme
              birthdate
              position
              height
              weight
              haircolor
              eyecolor
              location
              id
              aboutmeimage {
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
      <BootstrapContainer key="container">
        {data.allSanityGeneral.edges.map(({ node }) => (
          <>
            <Row key="Row1">
              <Col>
                <br />
                <h2>Om mig</h2>
                <br />
              </Col>
            </Row>

            <Row key="Row2">
              <Col
                xs={{ span: 8, offset: 2 }}
                sm={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                style={{ marginBottom: 30 }}
              >
                <Img key={'Image'} fluid={node.aboutmeimage.asset.fluid} />
              </Col>
              <Col
                xs={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                <p style={{ whiteSpace: 'pre-wrap', fontSize: '120%' }}>
                  {node.aboutme}
                </p>
                <br />
                <br />
              </Col>
            </Row>
            <Row key="Row3">
              <Col
                style={{ marginTop: 20 }}
                md={{ span: 10, offset: 1 }}
                sm={{ span: 12, offset: 0 }}
                xs={{ span: 12, offset: 0 }}
              >
                <Attribute
                  category={'Alder'}
                  value={<Age birthdate={node.birthdate} />}
                  unit={'år'}
                />
                <Attribute
                  category={'Øjenfarve'}
                  value={node.eyecolor}
                  unit={''}
                />
                <Attribute
                  category={'Hårfarve'}
                  value={node.haircolor}
                  unit={''}
                />
                <Attribute category={'Højde'} value={node.height} unit={'cm'} />
                <Attribute category={'Vægt'} value={node.weight} unit={'kg'} />
                <Attribute
                  category={'Stilling'}
                  value={node.position}
                  unit={''}
                />
                <Attribute
                  category={'Placering'}
                  value={node.location}
                  unit={''}
                />
              </Col>
            </Row>
          </>
        ))}
      </BootstrapContainer>
    )}
  />
);

function Attribute(props) {
  return (
    <p style={{ marginBottom: 14 }}>
      <span style={{ color: '#8f8f8f', marginRight: 10 }}>
        {props.category}
        {': '}
      </span>
      {props.value} {props.unit}
    </p>
  );
}
function Age(props) {
  console.log(props.birthdate);
  var start = new Date(props.birthdate);
  var today = new Date();
  var difference = new Date(today - start).getFullYear() - 1970;
  return difference;
}

export default OmMig;
