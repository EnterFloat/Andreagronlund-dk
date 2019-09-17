import React from 'react';
import Layout from '@common/Layout';
import MainNavbar from '@common/Navbar';
import Film from '@sections/Film';
import Footer from '@sections/Footer';

const FilmPage = () => (
  
  <Layout>
    <MainNavbar />
    <Film />
    <Footer /> 
  </Layout>
);

export default FilmPage