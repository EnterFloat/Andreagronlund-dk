import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Cv = () => (
  <StaticQuery
    query={graphql`
    query CvQuery {
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
    }
    `}
    render={data => (
        <Container>
        {data.allSanityGeneral.edges.map(({ node }) => (
            <div>
        <p>
            CV
            <br/>
            {node.mobile}
            
        </p>
        </div>
        ))}
        </Container>
    )}
  />
);


export default Cv;
