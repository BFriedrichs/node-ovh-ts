/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesSpamAndVirusConfiguration } from './MsServicesSpamAndVirusConfiguration';
import { MsServicesExchangeLicenceEnum } from './MsServicesExchangeLicenceEnum';
import { MsServicesMailingFilterEnum } from './MsServicesMailingFilterEnum';
import { MsServicesObjectStateEnum } from './MsServicesObjectStateEnum';
import { MsServicesRenewPeriodEnum } from './MsServicesRenewPeriodEnum';

export type MsServicesExchangeInformation = {
  accountLicense: MsServicesExchangeLicenceEnum;
  configured: boolean;
  creationDate: Date | null;
  currentUsage: number | null;
  deleteAtExpiration: boolean | null;
  deleteOutlookAtExpiration: boolean | null;
  exchangeGuid: string | null;
  expirationDate: Date | null;
  expirationOutlookDate: Date | null;
  hiddenFromGAL: boolean;
  id: number;
  litigation: boolean;
  litigationPeriod: number | null;
  mailingFilter: MsServicesMailingFilterEnum[] | null;
  numberOfAliases: number;
  outlookLicense: boolean;
  owaLimited: boolean;
  primaryEmailAddress: string;
  quota: number;
  renewOutlookPeriod: MsServicesRenewPeriodEnum | null;
  renewPeriod: MsServicesRenewPeriodEnum | null;
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
  spamDetected: boolean;
  spamTicketNumber: number | null;
  state: MsServicesObjectStateEnum;
  taskPendingId: number;
};
