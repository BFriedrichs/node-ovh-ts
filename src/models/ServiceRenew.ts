/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceRenewInterval } from './ServiceRenewInterval';
import { ServiceRenewMode } from './ServiceRenewMode';

export type ServiceRenew = {
  dayOfMonth?: number | null;
  interval?: ServiceRenewInterval | null;
  mode?: ServiceRenewMode;
  possibleIntervals?: ServiceRenewInterval[] | null;
  possibleModes?: ServiceRenewMode[];
};
