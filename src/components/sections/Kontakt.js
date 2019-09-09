import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';

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
          <div key="container">
            <h1>Contact</h1>

            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        ))}
      </Container>
    )}
  />
);

export default Kontakt;
