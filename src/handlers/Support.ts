/* WARNING: This file is auto-generated . Do not edit manually. */

import { SupportTicket } from '../models/SupportTicket';
import { SupportNewMessageInfo } from '../models/SupportNewMessageInfo';
import { SupportMessage } from '../models/SupportMessage';
import { SupportTicketTypeEnum } from '../models/SupportTicketTypeEnum';
import { SupportTicketProductEnum } from '../models/SupportTicketProductEnum';
import { SupportTicketImpactUrgencyEnum } from '../models/SupportTicketImpactUrgencyEnum';
import { SupportTicketSubCategoryEnum } from '../models/SupportTicketSubCategoryEnum';
import { SupportTicketStatusEnum } from '../models/SupportTicketStatusEnum';
import { SupportTicketCategoryEnum } from '../models/SupportTicketCategoryEnum';
import OVHBase from '../ovh';

class SupportHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List support tickets identifiers for this service */
  getTickets = (): Promise<number> => {
    return this.ovh.request('GET', '/support/tickets');
  };

  /** Create a new ticket */
  postTicketsCreate = (body: {
    body: string;
    category?: SupportTicketCategoryEnum;
    impact?: SupportTicketImpactUrgencyEnum;
    product?: SupportTicketProductEnum;
    serviceName?: string;
    subcategory?: SupportTicketSubCategoryEnum;
    subject: string;
    type?: SupportTicketTypeEnum;
    urgency?: SupportTicketImpactUrgencyEnum;
  }): Promise<SupportNewMessageInfo> => {
    return this.ovh.request('POST', '/support/tickets/create', body);
  };

  /** Get ticket */
  getTicketsTicketId = (ticketId: number): Promise<SupportTicket> => {
    return this.ovh.request('GET', `/support/tickets/${ticketId}`);
  };

  /** Checks whether ticket can be scored */
  getTicketsTicketIdCanBeScored = (ticketId: number): Promise<boolean> => {
    return this.ovh.request('GET', `/support/tickets/${ticketId}/canBeScored`);
  };

  /** Close ticket */
  postTicketsTicketIdClose = (ticketId: number): Promise<void> => {
    return this.ovh.request('POST', `/support/tickets/${ticketId}/close`);
  };

  /** Get ticket messages */
  getTicketsTicketIdMessages = (ticketId: number): Promise<SupportMessage> => {
    return this.ovh.request('GET', `/support/tickets/${ticketId}/messages`);
  };

  /** Reopen a ticket */
  postTicketsTicketIdReopen = (ticketId: number, body: { body: string }): Promise<void> => {
    return this.ovh.request('POST', `/support/tickets/${ticketId}/reopen`, body);
  };

  /** Reply to ticket */
  postTicketsTicketIdReply = (ticketId: number, body: { body: string }): Promise<void> => {
    return this.ovh.request('POST', `/support/tickets/${ticketId}/reply`, body);
  };

  /** Set ticket score */
  postTicketsTicketIdScore = (
    ticketId: number,
    body: { score: string; scoreComment?: string }
  ): Promise<void> => {
    return this.ovh.request('POST', `/support/tickets/${ticketId}/score`, body);
  };
}

export default SupportHandler;
