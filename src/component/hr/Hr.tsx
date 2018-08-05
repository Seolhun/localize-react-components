import * as React from 'react';

const styles = require('./Hr.scss');

export interface HrProps {
  className?: string;
  color?: string;
  style?: {
    margin?: string;
  };
}

const Hr: React.SFC<HrProps> = ({ className, color, style }) => (
  <hr
    className={`${styles.separator} ${className}`}
    style={{
      ...style,
      borderTop: `1px solid ${color}`,
    }}
  />
);

Hr.defaultProps = {
  className: '',
  color: '#000',
  style: {
    margin: '1rem 0',
  },
};

export default Hr;