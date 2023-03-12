/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpRoutedTo } from './IpRoutedTo';
import { IpIpTypeEnum } from './IpIpTypeEnum';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';

export type IpServiceIp = {
  canBeTerminated?: boolean;
  country?: CoreTypesCountryEnum | null;
  description?: string | null;
  ip?: string;
  organisationId?: string | null;
  routedTo?: IpRoutedTo | null;
  type?: IpIpTypeEnum;
};
