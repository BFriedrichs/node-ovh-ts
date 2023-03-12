/* WARNING: This file is auto-generated . Do not edit manually. */

import { SupportTicketProductEnum } from './SupportTicketProductEnum';
import { SupportTicketTypeEnum } from './SupportTicketTypeEnum';
import { SupportTicketCategoryEnum } from './SupportTicketCategoryEnum';
import { SupportTicketStatusEnum } from './SupportTicketStatusEnum';
import { SupportMessageSenderEnum } from './SupportMessageSenderEnum';

export type SupportTicket = {
  accountId: string;
  canBeClosed: boolean;
  category: SupportTicketCategoryEnum | null;
  creationDate: Date;
  lastMessageFrom: SupportMessageSenderEnum;
  product: SupportTicketProductEnum | null;
  score: string;
  serviceName: string | null;
  state: SupportTicketStatusEnum;
  subject: string;
  ticketId: number;
  ticketNumber: number;
  type: SupportTicketTypeEnum;
  updateDate: Date;
};
