/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeMailingListJoinRestrictionEnum } from './EmailExchangeMailingListJoinRestrictionEnum';
import { EmailExchangeMailingListDepartRestrictionEnum } from './EmailExchangeMailingListDepartRestrictionEnum';

export type EmailExchangeMailingList = {
  company: string | null;
  creationDate: Date;
  departRestriction: EmailExchangeMailingListDepartRestrictionEnum;
  displayName: string | null;
  hiddenFromGAL: boolean;
  joinRestriction: EmailExchangeMailingListJoinRestrictionEnum;
  lastUpdateDate: Date | null;
  mailingListAddress: string;
  maxReceiveSize: number | null;
  maxSendSize: number | null;
  senderAuthentification: boolean;
  spamDetected: boolean;
  spamTicketNumber: number | null;
  state: EmailExchangeObjectStateEnum;
  taskPendingId: number;
};
