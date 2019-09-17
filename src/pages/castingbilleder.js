import React from 'react';
import Layout from '@common/Layout';
import MainNavbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Video from '@common/Video';

// import { Button } from 'react-bootstrap';

const MediaPage = () => (
  
  <Layout>
    <MainNavbar />
    <h1>Castingbilleder</h1>
    {/* <Button variant="primary">primary</Button> */}
    <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    <Footer /> 
  </Layout>
);

export default MediaPage