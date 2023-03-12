/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicensePleskVersionEnum } from './LicensePleskVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseDomainNumberEnum } from './LicenseDomainNumberEnum';

export type LicensePleskPlesk = {
  creation?: Date;
  deleteAtExpiration?: boolean;
  domain?: string;
  domainNumber?: LicenseDomainNumberEnum | null;
  informationKey?: string | null;
  ip?: string;
  key?: string;
  licenseId?: string;
  productKey?: string | null;
  status?: LicenseStateEnum;
  version?: LicensePleskVersionEnum;
};
