/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOptionTypeEnum } from './CdnOptionTypeEnum';
import { CdnDomainOptionConfig } from './CdnDomainOptionConfig';
import { CdnDomainOptionExtra } from './CdnDomainOptionExtra';

export type CdnDomainOption = {
  config?: CdnDomainOptionConfig | null;
  enabled: boolean;
  extra?: CdnDomainOptionExtra | null;
  name?: string;
  pattern?: string | null;
  type: CdnOptionTypeEnum;
};
