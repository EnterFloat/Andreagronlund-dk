import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';

const Cv = () => (
  <StaticQuery
    query={graphql`
      query CvQuery {
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
              CV
              <br />
              {node.mobile}
            </p>
          </div>
        ))}
      </Container>
    )}
  />
);

export default Cv;
