import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Video from '@common/Video';
import styled from 'styled-components';
import { Component } from 'react';

function TitleAndYear(props) {
  if (props.year === null) {
    return <span {...props}>{props.title}</span>;
  } else {
    return (
      <span {...props}>
        {props.title}
        {' ('}
        {props.year}
        {')'}
      </span>
    );
  }
}

class Film extends Component {
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
    data.allSanityFilm.edges.sort(function(a, b) {
      return b.node.year - a.node.year;
    });

    return (
      <Container>
        <br />
        <h3>Film</h3>
        <Row>
          {data.allSanityFilm.edges.map(({ node }) => (
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
                  <IframeContainer>
                    <Video videoSrcURL={node.film} />
                  </IframeContainer>
                  <p style={{ textAlign: 'left', fontSize: '100%' }}>
                    <TitleAndYear title={node.title} year={node.year} />
                  </p>
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
      query FilmQuery {
        allSanityFilm {
          edges {
            node {
              film
              title
              year
            }
          }
        }
      }
    `}
    render={data => <Film data={data} {...props} />}
  />
);
