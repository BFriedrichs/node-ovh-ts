/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProObjectStateEnum } from './EmailProObjectStateEnum';
import { EmailProDomainTypeEnum } from './EmailProDomainTypeEnum';

export type EmailMxplanDomain = {
  cnameToCheck?: string | null;
  domainAliases?: string[];
  domainValidated?: boolean;
  isAliasDomain?: boolean;
  mxIsValid?: boolean;
  mxRecord?: string[];
  mxRelay?: string | null;
  name?: string;
  srvIsValid?: boolean;
  srvRecord?: string[];
  state?: EmailProObjectStateEnum;
  taskPendingId?: number;
  type?: EmailProDomainTypeEnum;
};
