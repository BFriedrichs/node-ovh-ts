/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseStateEnum } from './LicenseStateEnum';
import { LicenseVirtuozzoContainerNumberEnum } from './LicenseVirtuozzoContainerNumberEnum';
import { LicenseVirtuozzoVersionEnum } from './LicenseVirtuozzoVersionEnum';

export type LicenseVirtuozzoVirtuozzo = {
  containerNumber: LicenseVirtuozzoContainerNumberEnum;
  creation: Date;
  deleteAtExpiration: boolean;
  domain: string;
  informationKey: string | null;
  ip: string;
  licenseId: string;
  productKey: string | null;
  status: LicenseStateEnum;
  version: LicenseVirtuozzoVersionEnum;
};
