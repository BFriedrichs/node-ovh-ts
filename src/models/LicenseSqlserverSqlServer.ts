/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseSqlServerVersionEnum } from './LicenseSqlServerVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

export type LicenseSqlserverSqlServer = {
  creation?: Date;
  domain?: string;
  ip?: string;
  licenseId?: string;
  status?: LicenseStateEnum;
  version?: LicenseSqlServerVersionEnum;
};
