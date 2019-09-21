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
              <tr>
                <td>
                  {node.title}
                  {' ('}
                  {node.year}
                  {')'}
                </td>
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
              <tr>
                <td>
                  {node.title}
                  {' ('}
                  {node.year}
                  {')'}
                </td>
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
              <tr>
                <td>
                  {node.title}
                  {' ('}
                  {node.year}
                  {')'}
                </td>
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
              <tr>
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
    
    function StyledNavLink(props) {
      return <Nav.Link style={{color: "black"}} {...props} />
    }
    
    return (
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
            <Row>
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
        ))}
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
    render={data => <Cv data={data} {...props} />}
  />
);
