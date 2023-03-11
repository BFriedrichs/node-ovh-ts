/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeServiceOfferEnum } from './EmailExchangeServiceOfferEnum';
import { EmailExchangeServiceStateEnum } from './EmailExchangeServiceStateEnum';
import { EmailExchangeSpamAndVirusConfiguration } from './EmailExchangeSpamAndVirusConfiguration';

export type EmailExchangeExchangeService = {
  adfsChangePassword: boolean;
  complexityEnabled: boolean;
  displayName: string | null;
  domain: string;
  hostname: string | null;
  lastUpdateDate: Date | null;
  lockoutDuration: number;
  lockoutObservationWindow: number;
  lockoutThreshold: number | null;
  maxPasswordAge: number | null;
  maxReceiveSize: number;
  maxSendSize: number;
  minPasswordAge: number | null;
  minPasswordLength: number | null;
  offer: EmailExchangeServiceOfferEnum;
  passwordHistoryCount: number | null;
  spamAndVirusConfiguration: EmailExchangeSpamAndVirusConfiguration;
  sslExpirationDate: Date | null;
  state: EmailExchangeServiceStateEnum;
  taskPendingId: number;
  webUrl: string | null;
};
