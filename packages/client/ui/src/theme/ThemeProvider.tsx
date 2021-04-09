import * as React from 'react';

import { ThemeProvider as ThemeUiProvider } from 'theme-ui';

import theme from './theme';

const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeUiProvider theme={theme}>{children}</ThemeUiProvider>;
};

export default ThemeProvider;
