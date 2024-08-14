import React from 'react';

interface SVG_IconProps {
  name: string;
  size?: number;
  color?: string;
}

const SVG_Icon: React.FC<SVG_IconProps> = ({ name, size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} fill={color}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default SVG_Icon;