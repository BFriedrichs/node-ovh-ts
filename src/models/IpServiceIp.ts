/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpRoutedTo } from './IpRoutedTo';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { IpIpTypeEnum } from './IpIpTypeEnum';

export type IpServiceIp = {
  canBeTerminated: boolean;
  country: CoreTypesCountryEnum | null;
  description: string | null;
  ip: string;
  organisationId: string | null;
  routedTo: IpRoutedTo | null;
  type: IpIpTypeEnum;
};
