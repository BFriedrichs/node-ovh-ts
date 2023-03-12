/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesServiceOfferEnum } from './MsServicesServiceOfferEnum';
import { MsServicesServiceStateEnum } from './MsServicesServiceStateEnum';
import { MsServicesSpamAndVirusConfiguration } from './MsServicesSpamAndVirusConfiguration';

export type MsServicesExchangeService = {
  displayName?: string | null;
  domain?: string;
  hostname?: string | null;
  maxReceiveSize?: number;
  maxSendSize?: number;
  offer?: MsServicesServiceOfferEnum;
  spamAndVirusConfiguration?: MsServicesSpamAndVirusConfiguration;
  sslExpirationDate?: Date | null;
  state?: MsServicesServiceStateEnum;
  taskPendingId?: number;
};
