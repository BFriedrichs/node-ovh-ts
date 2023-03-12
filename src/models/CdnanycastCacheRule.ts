/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastCacheRuleStatusEnum } from './CdnanycastCacheRuleStatusEnum';
import { CdnanycastCacheRuleFileTypeEnum } from './CdnanycastCacheRuleFileTypeEnum';
import { CdnanycastCacheRuleCacheTypeEnum } from './CdnanycastCacheRuleCacheTypeEnum';

export type CdnanycastCacheRule = {
  cacheRuleId: number;
  cacheType: CdnanycastCacheRuleCacheTypeEnum;
  domain: string;
  fileMatch: string;
  fileType: CdnanycastCacheRuleFileTypeEnum;
  status: CdnanycastCacheRuleStatusEnum;
  ttl: number;
};
