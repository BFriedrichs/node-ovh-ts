/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseVirtuozzoContainerNumberEnum } from './LicenseVirtuozzoContainerNumberEnum';
import { LicenseVirtuozzoVersionEnum } from './LicenseVirtuozzoVersionEnum';
import { LicenseStateEnum } from './LicenseStateEnum';

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
