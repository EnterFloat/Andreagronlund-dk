import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
  query={graphql`
  query HeaderQuery {
   allSanityGeneral (limit: 1) {
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
  allSanityFrontpageimages (limit: 1) {
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
            fluid(maxWidth: 400, maxHeight: 400) {
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

              <Img fluid={node.frontpageimage.asset.fluid} />
            ))}
            </Margin>
            {data.allSanityGeneral.edges.map(({ node }) => (

            <Text>
              
              <h1>
                {firstName(node.name)}
                <br />
                {lastName(node.name)}
                <br />
              </h1>
              <h1 style={MarginBottom}>
                {node.pagesubtitle}
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                  Om mig &nbsp;&#x2794;
                </StyledExternalLink>
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
  const ar = name.split(" ");
  return ar[0];
}
function lastName(name) {
  return name.slice(name.indexOf(" "));
}

var MarginBottom = {
  marginBottom: '20px',
}

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
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
    grid-gap: 80px;

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

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
