/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastDomainTypeEnum } from './CdnanycastDomainTypeEnum';
import { CdnanycastDomainStatusEnum } from './CdnanycastDomainStatusEnum';

export type CdnanycastDomain = {
  cacheRuleUse: number;
  cname: string;
  domain: string;
  status: CdnanycastDomainStatusEnum;
  type: CdnanycastDomainTypeEnum;
};
