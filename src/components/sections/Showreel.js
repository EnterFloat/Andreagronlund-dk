import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Video from '@common/Video';
import styled from 'styled-components';
import { Component } from 'react';


class Showreel extends Component {
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

    const IframeContainer = styled.div`
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      height: 0;
    `;
    return (
      <Container>
        <br />
        <h3>Film</h3>
        <Row>
          {data.allSanityShowreel.edges.map(({ node }) => (
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              style={{ textAlign: 'center', marginTop: '30px' }}
            >
              <Card>
              <Card.Body>
                  <IframeContainer>
                    <Video videoSrcURL={node.showreel} />
                  </IframeContainer>
                </Card.Body>
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
    render={data => <Showreel data={data} {...props} />}
  />
);
