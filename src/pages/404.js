import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <br />
      <br />
      <h1>IKKE FUNDET</h1>
      <p>Siden du søger findes ikke... Hvor trist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
