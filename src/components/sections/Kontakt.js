import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Kontakt = () => (
  <StaticQuery
    query={graphql`
      query kontaktQuery {
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
      }
    `}
    render={data => (
      <Container>
        {data.allSanityGeneral.edges.map(({ node }) => (
          <div>
            <p>
              Kontakt
              <br />
              Her kan du sende en besked til mig
              <br />
              <br />
              <br />
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>
                    Dit navn: <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Din email: <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Besked: <textarea name="message"></textarea>
                  </label>
                </p>
                <p hidden>
                  <label>
                    Don’t fill this out if you're human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
              {node.mobile}
            </p>
          </div>
        ))}
      </Container>
    )}
  />
);

export default Kontakt;
