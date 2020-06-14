import { localizeLightTheme } from '@seolhun/localize-components-styled-types';

import { BDSizeObject } from '../system';
import { StoriesThemeWrapper } from './StoriesThemeWrapper';

const storiesSizeOption: BDSizeObject = {
  xl: 'xl',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
};

const storiesColorOption = Object.keys(localizeLightTheme.colors).reduce(
  (acc, key) => ({
    ...acc,
    [key]: key,
  }),
  {},
);

export { storiesSizeOption, storiesColorOption, StoriesThemeWrapper };

export default {
  storiesSizeOption,
  storiesColorOption,
};
