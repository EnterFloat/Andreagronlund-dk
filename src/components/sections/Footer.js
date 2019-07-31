import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FacebookIcon from '@static/icons/facebook.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/',
  },
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
    query FooterQuery {
    allSanityGeneral(limit: 1) {
      edges {
        node {
          name
          pagetitle
          email
          mobile
          instagram
          dask
        }
      }
    }
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
  }

`}
    render={data => (
      <React.Fragment>
        {/* <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art> */}
        <FooterWrapper>
        <hr />
          <StyledContainer>
            <Copyright>
              {data.allSanityGeneral.edges.map(({ node }) => (
              <div>
              {/* <h2>Andrea Grønlund</h2> */}
              <p>Telefon: {node.mobile}</p>
              <br />
              <p>Mail: {node.email}</p>
              {/* <span>
                Udviklet af 
                {` `}
                <ExternalLink href="https://enterfloat.dk">
                  EnterFloat
                </ExternalLink>
              </span> */}
              <br />
              </div>
              ))}

              <p>Sidst opdateret {data.site.buildTime}</p>

            
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.white.regular};

  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.primary};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
