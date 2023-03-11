/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOptionTypeEnum } from './CdnOptionTypeEnum';
import { CdnDomainOptionExtra } from './CdnDomainOptionExtra';
import { CdnDomainOptionConfig } from './CdnDomainOptionConfig';

export type CdnDomainOption = {
  config: CdnDomainOptionConfig | null;
  enabled?: boolean;
  extra: CdnDomainOptionExtra | null;
  name: string;
  pattern: string | null;
  type?: CdnOptionTypeEnum;
};
