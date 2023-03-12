/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDomainNsTypeEnum } from './DomainDomainNsTypeEnum';
import { DomainDomainLockStatusEnum } from './DomainDomainLockStatusEnum';
import { DomainParentService } from './DomainParentService';
import { DomainDomainSuspensionStateEnum } from './DomainDomainSuspensionStateEnum';
import { DomainOfferEnum } from './DomainOfferEnum';
import { DomainDomainStateEnum } from './DomainDomainStateEnum';

export type DomainDomain = {
  dnssecSupported?: boolean;
  domain?: string;
  glueRecordIpv6Supported?: boolean;
  glueRecordMultiIpSupported?: boolean;
  hostSupported?: boolean;
  lastUpdate?: Date;
  nameServerType?: DomainDomainNsTypeEnum;
  offer?: DomainOfferEnum;
  owoSupported?: boolean;
  parentService?: DomainParentService | null;
  state?: DomainDomainStateEnum;
  suspensionState?: DomainDomainSuspensionStateEnum;
  transferLockStatus?: DomainDomainLockStatusEnum;
  whoisOwner?: string;
};
