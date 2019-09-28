import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Row,
  Col,
  Container as BootstrapContainer,
  Table,
  Nav,
  Card,
} from 'react-bootstrap';

import { Component } from 'react';

function TitleAndYear(props) {
  if (props.year === null) {
    return <td {...props}>{props.title}</td>;
  } else {
    return (
      <td {...props}>
        {props.title}
        {' ('}
        {props.year}
        {')'}
      </td>
    );
  }
}

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '1' };
  }
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  SchemaHead(props) {
    switch (props.option) {
      case '1':
        return (
          <thead>
            <tr>
              <th>Titel</th>
              <th>Rolle</th>
              <th>Instruktør</th>
              <th>Producent</th>
            </tr>
          </thead>
        );
        break;
      case '2':
        return (
          <thead>
            <tr>
              <th>Titel</th>
              <th>Rolle</th>
              <th>Instruktør</th>
              <th>Arrangør</th>
            </tr>
          </thead>
        );
        break;
      case '3':
        return (
          <thead>
            <tr>
              <th>Titel</th>
              <th>Underviser</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
        );
        break;
      case '4':
        return (
          <thead>
            <tr>
              <th>Titel</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
        );
        break;
      default:
        return (
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        );
    }
  }

  SchemaBody(props) {
    switch (props.option) {
      case '1':
        return (
          <tbody>
            {props.data.allSanityFilmandtv.edges.map(({ node }) => (
              <tr key={node.id}>
                <TitleAndYear title={node.title} year={node.year} />
                <td>{node.role}</td>
                <td>{node.instructor}</td>
                <td>{node.producer}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case '2':
        return (
          <tbody>
            {props.data.allSanityTheater.edges.map(({ node }) => (
              <tr key={node.id}>
                <TitleAndYear title={node.title} year={node.year} />
                <td>{node.role}</td>
                <td>{node.instructor}</td>
                <td>{node.organiser}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case '3':
        return (
          <tbody>
            {props.data.allSanityEducation.edges.map(({ node }) => (
              <tr key={node.id}>
                <TitleAndYear title={node.title} year={node.year} />
                <td>{node.teacher}</td>
                <td>{node.description}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case '4':
        return (
          <tbody>
            {props.data.allSanityOther.edges.map(({ node }) => (
              <tr key={node.id}>
                <td>{node.title}</td>
                <td>{node.description}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      default:
        return (
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        );
    }
  }

  render() {
    const { data } = this.props;
    data.allSanityFilmandtv.edges.sort(function(a, b) {
      return b.node.year - a.node.year;
    });
    data.allSanityTheater.edges.sort(function(a, b) {
      return b.node.year - a.node.year;
    });
    data.allSanityEducation.edges.sort(function(a, b) {
      return b.node.year - a.node.year;
    });

    function StyledNavLink(props) {
      return <Nav.Link style={{ color: 'black' }} {...props} />;
    }

    return (
      <BootstrapContainer key="container">
        <>
          <Row key="Row1">
            <Col>
              <br />
              <h2>CV</h2>
              <br />
            </Col>
          </Row>
          <Row key="Row2">
            {/* <Col
              xs={{ span: 8, offset: 2 }}
              sm={{ span: 8, offset: 2 }}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 4, offset: 0 }}
              xl={{ span: 4, offset: 0 }}
              style={{ marginBottom: 30 }}
            >
                <Img key={'Image'} fluid={node.cvimage.asset.fluid} />
            </Col> */}
            
            {data.allSanityGeneral.edges.map(({ node }) => (
              <>
            <Col
                id={"Col1"}
                xs={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 3, offset: 1 }}
                lg={{ span: 3, offset: 1 }}
                xl={{ span: 3, offset: 1 }}
                style={{ marginBottom: 30}}
              >
                <Img key={'Image'} style={{height: "100%"}} fluid={node.cvimage.asset.fluid} />
              </Col>
              <Col
                id={"Col1"}
                xs={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 7, offset: 0 }}
                lg={{ span: 7, offset: 0 }}
                xl={{ span: 7, offset: 0 }}
                style={{ marginBottom: 30 }}
              >
                <Img key={'Image'} style={{height: "100%"}} fluid={node.cvimage2.asset.fluid} />
              </Col>
              </>
              ))}
              

            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
            >
              <br />
            </Col>
          </Row>
          <Row key="Row3">
            <Card>
              <Card.Header>
                <Nav
                  fill
                  variant="tabs"
                  defaultActiveKey={this.state.selectedKey}
                  onSelect={selectedKey =>
                    this.setState({
                      selectedOption: selectedKey,
                    })
                  }
                >
                  <Nav.Item>
                    <StyledNavLink
                      active={this.state.selectedOption === '1'}
                      eventKey="1"
                    >
                      Film og TV
                    </StyledNavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <StyledNavLink
                      active={this.state.selectedOption === '2'}
                      eventKey="2"
                    >
                      Teater
                    </StyledNavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <StyledNavLink
                      active={this.state.selectedOption === '3'}
                      eventKey="3"
                    >
                      Kurser og uddannelser
                    </StyledNavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <StyledNavLink
                      active={this.state.selectedOption === '4'}
                      eventKey="4"
                    >
                      Anden bedrift
                    </StyledNavLink>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <this.SchemaHead option={this.state.selectedOption} />
                  <this.SchemaBody
                    data={data}
                    option={this.state.selectedOption}
                  />
                </Table>
              </Card.Body>
            </Card>
          </Row>
        </>
      </BootstrapContainer>
    );
  }
}
export default props => (
  <StaticQuery
    query={graphql`
      query CvQuery {
        allSanityGeneral(limit: 1) {
          edges {
            node {
              id
              cvimage {
                asset {
                  fluid(maxWidth: 300, maxHeight: 400) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              cvimage2 {
                asset {
                  fluid(maxWidth: 700, maxHeight: 400) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
        allSanityFilmandtv {
          edges {
            node {
              id
              year
              title
              role
              producer
              instructor
            }
          }
        }
        allSanityOther {
          edges {
            node {
              id
              title
              description
            }
          }
        }
        allSanityTheater {
          edges {
            node {
              id
              title
              year
              role
              instructor
              organiser
            }
          }
        }
        allSanityEducation {
          edges {
            node {
              id
              title
              year
              teacher
              description
            }
          }
        }
      }
    `}
    render={data => <Cv data={data} {...props} />}
  />
);
