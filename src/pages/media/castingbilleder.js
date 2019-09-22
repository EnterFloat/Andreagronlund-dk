import React from 'react';
import Layout from '@common/Layout';
import MainNavbar from '@common/Navbar';
import Castingbilleder from '@sections/Castingbilleder';
import Footer from '@sections/Footer';

const CastingbillederPage = () => (
  
  <Layout>
    <MainNavbar />
    <Castingbilleder />
    <Footer /> 
  </Layout>
);

export default CastingbillederPage