import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';

const OmMig = () => (
  <StaticQuery
    query={graphql`
      query OmMigQuery {
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
            <p>
              Om mig
              <br />
              {node.mobile}
            </p>
          </div>
        ))}
      </Container>
    )}
  />
);

export default OmMig;
