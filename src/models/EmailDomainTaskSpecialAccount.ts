/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDomainSpecialAccountTypeEnum } from './DomainDomainSpecialAccountTypeEnum';
import { DomainDomainSpecialAccountActionEnum } from './DomainDomainSpecialAccountActionEnum';

export type EmailDomainTaskSpecialAccount = {
  account: string;
  action: DomainDomainSpecialAccountActionEnum;
  date: Date;
  domain: string;
  id: string;
  type: DomainDomainSpecialAccountTypeEnum;
};
