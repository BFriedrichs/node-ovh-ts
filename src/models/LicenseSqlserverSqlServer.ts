/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseSqlServerVersionEnum } from './LicenseSqlServerVersionEnum';

export type LicenseSqlserverSqlServer = {
  creation: Date;
  domain: string;
  ip: string;
  licenseId: string;
  status: LicenseStateEnum;
  version: LicenseSqlServerVersionEnum;
};
