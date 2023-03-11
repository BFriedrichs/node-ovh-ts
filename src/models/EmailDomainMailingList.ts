/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDomainMlLanguageEnum } from './DomainDomainMlLanguageEnum';
import { DomainDomainMlOptionsStruct } from './DomainDomainMlOptionsStruct';

export type EmailDomainMailingList = {
  id: number;
  language: DomainDomainMlLanguageEnum | null;
  name: string;
  nbSubscribers: number | null;
  nbSubscribersUpdateDate: Date | null;
  options: DomainDomainMlOptionsStruct;
  ownerEmail: string;
  replyTo: string;
};
