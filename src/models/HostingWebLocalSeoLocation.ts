/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebLocalSeoLocationStatusEnum } from './HostingWebLocalSeoLocationStatusEnum';
import { HostingWebLocalSeoLocationCountryEnum } from './HostingWebLocalSeoLocationCountryEnum';
import { HostingWebLocalSeoLocationOfferEnum } from './HostingWebLocalSeoLocationOfferEnum';

export type HostingWebLocalSeoLocation = {
  accountId: number | null;
  address: string | null;
  country: HostingWebLocalSeoLocationCountryEnum;
  creationDate: Date;
  id: number;
  lastUpdate: Date;
  name: string | null;
  offer: HostingWebLocalSeoLocationOfferEnum;
  status: HostingWebLocalSeoLocationStatusEnum;
  taskId: number | null;
};
