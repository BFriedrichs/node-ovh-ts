/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainDomainNsTypeEnum } from './DomainDomainNsTypeEnum';
import { DomainDomainSuspensionStateEnum } from './DomainDomainSuspensionStateEnum';
import { DomainDomainStateEnum } from './DomainDomainStateEnum';
import { DomainParentService } from './DomainParentService';
import { DomainOfferEnum } from './DomainOfferEnum';
import { DomainDomainLockStatusEnum } from './DomainDomainLockStatusEnum';

export type DomainDomain = {
  dnssecSupported: boolean;
  domain: string;
  glueRecordIpv6Supported: boolean;
  glueRecordMultiIpSupported: boolean;
  hostSupported: boolean;
  lastUpdate: Date;
  nameServerType: DomainDomainNsTypeEnum;
  offer: DomainOfferEnum;
  owoSupported: boolean;
  parentService: DomainParentService | null;
  state: DomainDomainStateEnum;
  suspensionState: DomainDomainSuspensionStateEnum;
  transferLockStatus: DomainDomainLockStatusEnum;
  whoisOwner: string;
};
