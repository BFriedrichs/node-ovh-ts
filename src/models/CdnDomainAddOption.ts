/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOptionTypePostEnum } from './CdnOptionTypePostEnum';
import { CdnDomainOptionConfig } from './CdnDomainOptionConfig';

export type CdnDomainAddOption = {
  config: CdnDomainOptionConfig | null;
  enabled?: boolean;
  name?: string;
  pattern: string | null;
  type?: CdnOptionTypePostEnum;
};
