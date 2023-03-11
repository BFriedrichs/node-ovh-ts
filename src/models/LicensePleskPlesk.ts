/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseDomainNumberEnum } from './LicenseDomainNumberEnum';
import { LicenseStateEnum } from './LicenseStateEnum';
import { LicensePleskVersionEnum } from './LicensePleskVersionEnum';

export type LicensePleskPlesk = {
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  domainNumber: LicenseDomainNumberEnum | null;
  informationKey: string | null;
  ip: string;
  key: string;
  licenseId: string;
  productKey: string | null;
  status: LicenseStateEnum;
  version: LicensePleskVersionEnum;
};
