import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
            }
          }
        }
        allSanityFrontpageimages(limit: 1) {
          edges {
            node {
              id
              frontpageimage {
                crop {
                  _key
                  _type
                  top
                  bottom
                  left
                  right
                }
                hotspot {
                  _key
                  _type
                  x
                  y
                  height
                  width
                }
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
      <HeaderWrapper id="hjem">
        <Container>
          <Grid>
            <Margin>
              {data.allSanityFrontpageimages.edges.map(({ node }) => (
                <Img key={node.id} fluid={node.frontpageimage.asset.fluid} />
              ))}
            </Margin>
            {data.allSanityGeneral.edges.map(({ node }) => (
              <Text key="text">
                <h2 key="firstName" style={MarginBottom}>
                  {firstName(node.name)}
                  {lastName(node.name)}
                  <br />
                </h2>
                <h2 style={{ color: '#8a8a8a' }} key="pageSubtitle">
                  {node.pagesubtitle}
                </h2>
                <br />
                <p>
                  <StyledLink to="/om-mig">Om mig &nbsp;&#x2794;</StyledLink>
                </p>
              </Text>
            ))}
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

function firstName(name) {
  const ar = name.split(' ');
  return ar[0];
}
function lastName(name) {
  return name.slice(name.indexOf(' '));
}

var MarginBottom = {
  marginBottom: '8px',
};

// const ConsoleLog = ({ children }) => {
//   console.log(children);
//   return false;
// };

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 30px;
  }
`;

const Margin = styled.div`
  margin: 0px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    margin: 0 50px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 40px;

    > ${Margin} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1600px;
    margin: 0px;
    padding: 0px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export default Header;
