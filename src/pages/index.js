import React from 'react';
import { graphql } from "gatsby"

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = ({ data }) => (
  
  <Layout>
  { console.log("Log") }

  {data.allSanityGeneral.edges.map(({ node }) => (
    <Navbar key="navbar" pagetitle={node.pagetitle}/>
  ))}
  <Header />    

    
    {/* <About />
    <Brands />
    <Team />
    <Faq /> */}
    <Footer /> 
    
  </Layout>
  
);

export default IndexPage

export const query = graphql`
{
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
          asset {
            url
          }
        }
      }
    }
  }
}
`