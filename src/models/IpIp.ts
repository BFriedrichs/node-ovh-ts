/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpRoutedTo } from './IpRoutedTo';
import { IpIpTypeEnum } from './IpIpTypeEnum';
import { CoreTypesCountryEnum } from './CoreTypesCountryEnum';
import { IpIpVersionEnum } from './IpIpVersionEnum';

export type IpIp = {
  bringYourOwnIp?: boolean;
  campus?: string | null;
  canBeTerminated?: boolean;
  country?: CoreTypesCountryEnum | null;
  description?: string | null;
  ip?: string;
  organisationId?: string | null;
  rir?: string | null;
  routedTo?: IpRoutedTo | null;
  type?: IpIpTypeEnum;
  version?: IpIpVersionEnum;
};
