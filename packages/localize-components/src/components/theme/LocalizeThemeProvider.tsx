import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import {
  lightTheme,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

interface LocalizeThemeProviderProps {
  /**
   * Set this to change LocalizeThemeProvider theme
   * @default lightTheme
   */
  theme?: LocalizeThemeProps;
}

const LocalizeThemeProvider: React.FC<LocalizeThemeProviderProps> = ({
  children,
  theme = lightTheme,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { LocalizeThemeProviderProps, LocalizeThemeProvider };

export default LocalizeThemeProvider;
