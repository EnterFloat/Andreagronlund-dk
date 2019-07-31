import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';


import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <TopMargin>
      <SEO />
      <GlobalStyles />
      {children}
    </TopMargin>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const TopMargin = styled.div`
  padding-top: 62px;
`;


export default Layout;
