/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeMailingFilterEnum } from './EmailExchangeMailingFilterEnum';

export type EmailExchangeSharedAccount = {
  creationDate: Date | null;
  currentUsage: number | null;
  displayName: string | null;
  firstName: string | null;
  hiddenFromGAL: boolean;
  id: number;
  initials: string | null;
  lastLogoffDate: Date | null;
  lastLogonDate: Date | null;
  lastName: string | null;
  mailingFilter: EmailExchangeMailingFilterEnum | null;
  quota: number;
  sharedEmailAddress: string;
  spamDetected: boolean;
  spamTicketNumber: number | null;
  state: EmailExchangeObjectStateEnum;
  taskPendingId: number;
};
