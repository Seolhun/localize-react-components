import React, { PureComponent, ReactNode } from 'react';

import {
  Align,
  AlignType,
  Themes,
  ThemeStyle,
  ThemeStyleType,
  ThemeType,
} from '@airbloc/hermes-types';
import {
  getAlignStyle,
  getThemeStyle,
} from '@airbloc/hermes-utils';

import classnames from 'classnames';

import './Jumbotron.scss';

interface JumbotronProps {
  title: string;
  // isNotRequired
  /**
   * Set this to change Input ours align type
   * @default 'center'
   */
  align?: AlignType;
  className?: string;
  children?: ReactNode;
  description?: string;
  style?: {};
  /**
   * Set this to change Input ours theme type
   * @default 'background'
   */
  themeType?: ThemeStyleType;
  /**
   * Set this to change Input ours theme
   * @default 'main'
   */
  theme?: ThemeType;
}

class Jumbotron extends PureComponent<JumbotronProps> {
  render() {
    const {
      title,
      // isNotRequired
      align = Align.CENTER,
      className,
      children,
      description,
      theme = Themes.BRAND_MAIN,
      themeType = ThemeStyle.Background,
    } = this.props;

    return (
      <section
        className={classnames(
          '__LocalizeHermes Jumbotron',
          getThemeStyle(theme, { themeType }),
          getAlignStyle(align),
          className,
        )}
      >
        <h1 className='Title'>{title}</h1>
        <h5 className='Description'>{description}</h5>
        {children}
      </section>
    );
  }
}

export default Jumbotron;
