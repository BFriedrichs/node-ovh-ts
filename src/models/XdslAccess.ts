/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslDslTypeEnum } from './XdslDslTypeEnum';
import { XdslAccessCapabilities } from './XdslAccessCapabilities';
import { XdslAddressDetail } from './XdslAddressDetail';
import { XdslAccessStatusEnum } from './XdslAccessStatusEnum';
import { XdslAccessRoleEnum } from './XdslAccessRoleEnum';

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
