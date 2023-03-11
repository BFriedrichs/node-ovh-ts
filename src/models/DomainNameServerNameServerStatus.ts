/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainNameServerNameServerTypeEnum } from './DomainNameServerNameServerTypeEnum';
import { DomainNameServerNameServerStateEnum } from './DomainNameServerNameServerStateEnum';

export type DomainNameServerNameServerStatus = {
  state: DomainNameServerNameServerStateEnum;
  type: DomainNameServerNameServerTypeEnum;
  usedSince: Date | null;
};
