/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProObjectStateEnum } from './EmailProObjectStateEnum';
import { EmailProRenewPeriodEnum } from './EmailProRenewPeriodEnum';
import { EmailProMailingFilterEnum } from './EmailProMailingFilterEnum';
import { EmailProSpamAndVirusConfiguration } from './EmailProSpamAndVirusConfiguration';

export type EmailMxplanAccount = {
  SAMAccountName?: string | null;
  configured?: boolean;
  creationDate?: Date | null;
  currentUsage?: number | null;
  deleteAtExpiration?: boolean | null;
  displayName?: string | null;
  domain?: string;
  expirationDate?: Date | null;
  expirationOutlookDate?: Date | null;
  firstName?: string | null;
  hiddenFromGAL?: boolean;
  id?: number;
  initial?: string | null;
  lastLogoffDate?: Date | null;
  lastLogonDate?: Date | null;
  lastName?: string | null;
  lastUpdateDate?: Date | null;
  login?: string;
  mailingFilter?: EmailProMailingFilterEnum[] | null;
  passwordLastUpdate?: Date | null;
  primaryEmailAddress?: string;
  quota?: number;
  renewPeriod?: EmailProRenewPeriodEnum | null;
  spamAndVirusConfiguration?: EmailProSpamAndVirusConfiguration;
  spamDetected?: boolean;
  spamTicketNumber?: number | null;
  state?: EmailProObjectStateEnum;
  taskPendingId?: number | null;
};
