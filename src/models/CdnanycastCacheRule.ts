/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastCacheRuleFileTypeEnum } from './CdnanycastCacheRuleFileTypeEnum';
import { CdnanycastCacheRuleCacheTypeEnum } from './CdnanycastCacheRuleCacheTypeEnum';
import { CdnanycastCacheRuleStatusEnum } from './CdnanycastCacheRuleStatusEnum';

export type CdnanycastCacheRule = {
  cacheRuleId: number;
  cacheType: CdnanycastCacheRuleCacheTypeEnum;
  domain: string;
  fileMatch: string;
  fileType: CdnanycastCacheRuleFileTypeEnum;
  status: CdnanycastCacheRuleStatusEnum;
  ttl: number;
};
