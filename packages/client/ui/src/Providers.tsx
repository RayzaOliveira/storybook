import * as React from 'react';

import ThemeProvider from './theme/ThemeProvider';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
