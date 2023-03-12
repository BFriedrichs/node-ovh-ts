/* WARNING: This file is auto-generated . Do not edit manually. */

import { SupportMessageSenderEnum } from './SupportMessageSenderEnum';
import { SupportTicketProductEnum } from './SupportTicketProductEnum';
import { SupportTicketCategoryEnum } from './SupportTicketCategoryEnum';
import { SupportTicketTypeEnum } from './SupportTicketTypeEnum';
import { SupportTicketStatusEnum } from './SupportTicketStatusEnum';

export type SupportTicket = {
  accountId?: string;
  canBeClosed?: boolean;
  category?: SupportTicketCategoryEnum | null;
  creationDate?: Date;
  lastMessageFrom?: SupportMessageSenderEnum;
  product?: SupportTicketProductEnum | null;
  score?: string;
  serviceName?: string | null;
  state?: SupportTicketStatusEnum;
  subject?: string;
  ticketId?: number;
  ticketNumber?: number;
  type?: SupportTicketTypeEnum;
  updateDate?: Date;
};
