import React, { ReactNode } from 'react';

import classnames from 'classnames';

import { Button } from '@seolhun/localize-components-button';
import {
  Position,
  PositionType,
  Size,
  SizeType,
  ThemeConfig,
  ThemesType,
} from '@seolhun/localize-components-styled-types';

import Modal from '../modal';

import './Alert.scss';

export interface AlertProps {
  /**
   * Set this to change Modal body children node
   */
  body: ReactNode | string;
  /**
   * Set this to toggle Alert Modal event handler
   */
  onClick: (...args: any[]) => void;
  // isNotRequired
  /**
   * Set this to change Modal button label
   * @default null
   */
  buttonLabel?: string;
  /**
   * Set this to change Modal className
   * @default null
   */
  className?: string;
  /**
   * Set this to change Modal showing or not
   * @default null
   */
  isShow?: boolean;
  /**
   * Set this to change Modal size
   * @default medium
   */
  size?: SizeType;
  /**
   * Set this to change Modal mainColor
   * @default ThemeConfig.primaryColor = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Modal subColor
   * @default ThemeConfig.secondaryColor = grey
   */
  subColor?: ThemesType;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  position?: PositionType;
  /**
   * Set this to change Modal header children node
   * @default null
   */
  header?: ReactNode | string;
  /**
   * Set this to change Modal rendering children node
   * @default null
   */
  zIndex?: number;
}

const Alert: React.FunctionComponent<AlertProps> = ({
  body,
  onClick,
  // is Not Required
  buttonLabel = 'Confirm',
  className = '',
  isShow = false,
  mainColor = ThemeConfig.primaryColor,
  position = Position.CENTER,
  size = Size.MEDIUM,
  subColor = ThemeConfig.secondaryColor,
  header = null,
  zIndex = 1000,
}) => {
  return (
    <Modal
      className={classnames(`__Localize__Alert`, className)}
      onClick={onClick}
      header={<div>{header}</div>}
      body={<div>{body}</div>}
      footer={
        <div className={`Alert__Buttons`}>
          <Button onClick={onClick} mainColor={mainColor} subColor={subColor}>
            {buttonLabel}
          </Button>
        </div>
      }
      position={position}
      size={size}
      zIndex={zIndex}
      isShow={isShow}
    />
  );
};

export default Alert;
