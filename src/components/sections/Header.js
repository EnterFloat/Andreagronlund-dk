import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Video from '@common/Video';
import "../../styles/videostyles.css"

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
                asset {
                  fluid(maxWidth: 872, maxHeight: 981) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              frontpagefilm
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper id="hjem">
        <div style={{ backgroundColor: 'white' }}>
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
        </div>
        {data.allSanityFrontpageimages.edges.map(({ node }) => (
        <Videocontainer>
          <div style={{height: "calc(100% - 56px)"}}>
          <iframe
          src={`${node.frontpagefilm}?rel=0&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0`}
          frameborder="0"
          
            parameters="showinfo=0"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen            
            height="100%"
            width="100%"
            style={{
              position: 'relative',
              top: '0',
              left: '0',              
            }}
          />          
          </div>
        </Videocontainer>
        ))}
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

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  background-color: #f8f9fa;
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: 30px;
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
  background-color: white;

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
const Videocontainer = styled.div`
  position: relative;
  height: calc(100vh - 2 * 56px);
  backgroundcolor: #f8f9fa;
  margin: 56px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {    
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 0;
    height: 300px;
    min-height: 300px;
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    margin: 56px;
  }
`;

export default Header;
