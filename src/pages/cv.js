import React from 'react';
import Layout from '@common/Layout';
import MainNavbar from '@common/Navbar';
import Cv from '@sections/Cv';
import Footer from '@sections/Footer';

const CVPage = () => (
  
  <Layout>
    <MainNavbar />
    <Cv />
    <Footer /> 
  </Layout>
);

export default CVPage