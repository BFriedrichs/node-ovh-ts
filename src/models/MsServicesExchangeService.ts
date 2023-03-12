/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesSpamAndVirusConfiguration } from './MsServicesSpamAndVirusConfiguration';
import { MsServicesServiceStateEnum } from './MsServicesServiceStateEnum';
import { MsServicesServiceOfferEnum } from './MsServicesServiceOfferEnum';

export type MsServicesExchangeService = {
  displayName: string | null;
  domain: string;
  hostname: string | null;
  maxReceiveSize: number;
  maxSendSize: number;
  offer: MsServicesServiceOfferEnum;
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
  sslExpirationDate: Date | null;
  state: MsServicesServiceStateEnum;
  taskPendingId: number;
};
