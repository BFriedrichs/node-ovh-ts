/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceRenewMode } from './ServiceRenewMode';
import { ServiceRenewInterval } from './ServiceRenewInterval';

export type ServiceRenew = {
  dayOfMonth: number | null;
  interval: ServiceRenewInterval | null;
  mode: ServiceRenewMode;
  possibleIntervals: ServiceRenewInterval[] | null;
  possibleModes: ServiceRenewMode[];
};
