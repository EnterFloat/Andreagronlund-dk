import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import ImdbIcon from '@static/icons/imdb.svg';
import InstagramIcon from '@static/icons/instagram.svg';

const today = new Date();

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
              imdb
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
        <FooterWrapper>
          <hr />
          {data.allSanityGeneral.edges.map(({ node }) => (
            <StyledContainer key="Container">
              <Copyright>
                <div key="Container">
                  <Paragraph key="mobile">Telefon: {node.mobile}</Paragraph>
                  <Paragraph key="mail">Mail: {node.email}</Paragraph>
                  <br />
                </div>
                <Paragraph>Sidst opdateret {data.site.buildTime}</Paragraph>
                <Paragraph style={{textAlign: "center"}} key="Copyright">&copy; {today.getFullYear()} - {node.name}</Paragraph>
              </Copyright>
              <SocialIcons>
                <ExternalLink key={InstagramIcon} href={node.instagram}>
                  <img
                    style={{ width: "25" }}
                    key={'img' + InstagramIcon}
                    src={InstagramIcon}
                    alt="link"
                  />
                </ExternalLink>
                <ExternalLink key={ImdbIcon} href={node.imdb}>
                  <img
                  style={{ width: "50" }}
                    key={'img' + ImdbIcon}
                    src={ImdbIcon}
                    alt="link"
                  />
                </ExternalLink>
                <ExternalLink
                  style={{ color: 'black', marginLeft: "8px" }}
                  href={node.dask}
                >
                  <h4>Dask</h4>
                </ExternalLink>              
              </SocialIcons>
            </StyledContainer>
          ))}
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    height: 25px;
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

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 0.8em;
`;

export default Footer;
