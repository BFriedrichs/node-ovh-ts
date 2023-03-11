/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslAccessRoleEnum } from './XdslAccessRoleEnum';
import { XdslDslTypeEnum } from './XdslDslTypeEnum';
import { XdslAccessStatusEnum } from './XdslAccessStatusEnum';
import { XdslAddressDetail } from './XdslAddressDetail';
import { XdslAccessCapabilities } from './XdslAccessCapabilities';

export type XdslAccess = {
  accessName: string;
  accessType: XdslDslTypeEnum;
  address: XdslAddressDetail;
  capabilities: XdslAccessCapabilities;
  description: string;
  ipv6Enabled: boolean;
  lnsRateLimit: number | null;
  monitoring: boolean;
  nra: string;
  packName: string | null;
  pairsNumber: number;
  role: XdslAccessRoleEnum;
  status: XdslAccessStatusEnum;
};
