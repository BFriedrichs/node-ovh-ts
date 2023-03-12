/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnDomainOptionConfig } from './CdnDomainOptionConfig';
import { CdnOptionTypePostEnum } from './CdnOptionTypePostEnum';

export type CdnDomainAddOption = {
  config: CdnDomainOptionConfig | null;
  enabled?: boolean;
  name?: string;
  pattern: string | null;
  type?: CdnOptionTypePostEnum;
};
