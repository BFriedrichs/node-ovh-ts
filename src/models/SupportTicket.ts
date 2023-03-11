/* WARNING: This file is auto-generated . Do not edit manually. */

import { SupportTicketTypeEnum } from './SupportTicketTypeEnum';
import { SupportTicketProductEnum } from './SupportTicketProductEnum';
import { SupportMessageSenderEnum } from './SupportMessageSenderEnum';
import { SupportTicketStatusEnum } from './SupportTicketStatusEnum';
import { SupportTicketCategoryEnum } from './SupportTicketCategoryEnum';

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
