import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Img from 'gatsby-image';
import { Component } from 'react';


class Castingbilleder extends Component {
  constructor(props) {
    super(props);
    this.state = { activeNavItem: '0' };
  }
  handleOptionChange = changeEvent => {
    this.setState({
      activeNavItem: changeEvent.target.value,
    });
  };

  render() {
    const { data } = this.props;

    // data.allSanityOtherimage.edges.sort(function(a, b) {
    //   return b.node.year - a.node.year;
    // });

    return (
      <Container>
        <br />
        <h3>Castingbilleder</h3>
        <Row>
          {data.allSanityOtherimage.edges.map(({ node }) => (
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 4, offset: 0 }}
              xl={{ span: 4, offset: 0 }}
              style={{ textAlign: 'center', marginTop: '30px' }}
            >
              <Card>
                <Card.Body>
                  <Img key="Image" fluid={node.otherimage.asset.fluid} />
                </Card.Body>
                <Card.Text>
                  <p style={{fontSize: "80%"}}>{node.otherimage.caption}</p>
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default props => (
  <StaticQuery
    query={graphql`
      query CastingbillederQuery {
          allSanityOtherimage {
            edges {
              node {
                otherimage {
                  caption
                  asset {
                    fluid(maxWidth: 590, maxHeight: 885) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
        }
    `}
    render={data => <Castingbilleder data={data} {...props} />}
  />
);
