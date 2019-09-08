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
            Kontakt
            <br />
            Her kan du sende en besked til mig
            <br />
            <br />
            <br />
            <form name="contact" method="POST" data-netlify="true">
              <label>
                Dit navn: <input type="text" name="name" />
              </label>
              <label>
                Din email: <input type="email" name="email" />
              </label>

              <label>
                Besked: <textarea name="message"></textarea>
              </label>

              <label hidden="true">
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            {node.mobile}
          </div>
        ))}
      </Container>
    )}
  />
);

export default Kontakt;
