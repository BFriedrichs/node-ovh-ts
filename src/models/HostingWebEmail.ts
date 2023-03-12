/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebMailStateEnum } from './HostingWebMailStateEnum';

export type HostingWebEmail = {
  bounce?: number;
  email?: string | null;
  maxPerDay?: number;
  sent?: number;
  sentToday?: number;
  state?: HostingWebMailStateEnum;
};
