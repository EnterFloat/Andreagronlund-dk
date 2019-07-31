import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Cv from '@sections/Cv';
import Footer from '@sections/Footer';

const CVPage = () => (
  
  <Layout>
    <Navbar />
    <Cv />
    <Footer /> 
  </Layout>
);

export default CVPage