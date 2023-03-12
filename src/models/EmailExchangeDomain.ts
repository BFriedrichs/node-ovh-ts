/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeDomainTypeEnum } from './EmailExchangeDomainTypeEnum';

export type EmailExchangeDomain = {
  cnameToCheck?: string | null;
  domainAliases?: string[];
  domainValidated?: boolean;
  expectedAutodiscoverSRV?: string;
  expectedMX?: string[];
  expectedSPF?: string;
  isAliasDomain?: boolean;
  main?: boolean | null;
  mxIsValid?: boolean;
  mxRecord?: string[] | null;
  mxRelay?: string | null;
  name?: string;
  organization2010?: string | null;
  sbrDefault?: string | null;
  sendConnectorIdDefault?: number | null;
  spfIsValid?: boolean;
  spfRecord?: string[] | null;
  srvIsValid?: boolean;
  srvRecord?: string[] | null;
  state?: EmailExchangeObjectStateEnum;
  taskPendingId?: number;
  type?: EmailExchangeDomainTypeEnum;
};
