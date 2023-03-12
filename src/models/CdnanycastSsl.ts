/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastSslStateEnum } from './CdnanycastSslStateEnum';

export type CdnanycastSsl = {
  certificateProvider?: string;
  certificateValidFrom?: Date | null;
  certificateValidTo?: Date | null;
  cn?: string | null;
  name?: string;
  status?: CdnanycastSslStateEnum;
};
