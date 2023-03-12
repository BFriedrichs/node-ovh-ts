/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOptionQueryParametersEnum } from './CdnOptionQueryParametersEnum';
import { CdnOptionPatternTypeEnum } from './CdnOptionPatternTypeEnum';

export type CdnDomainOptionConfig = {
  destination: string | null;
  followUri: boolean | null;
  origins: string | null;
  patternType: CdnOptionPatternTypeEnum | null;
  priority: number | null;
  queryParameters: CdnOptionQueryParametersEnum | null;
  resources: string[] | null;
  statusCode: number | null;
  ttl: number | null;
};
