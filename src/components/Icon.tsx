import * as React from 'react';

import { iconMap, IconType } from '../utils/iconMap';

export interface IIconProps {
  iconKey: IconType;
}

const Icon: React.SFC<IIconProps> = ({ iconKey }) => iconMap[iconKey];

export default Icon;
