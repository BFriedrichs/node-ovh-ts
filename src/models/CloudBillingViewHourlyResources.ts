/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewHourlyInstanceBandwidth } from './CloudBillingViewHourlyInstanceBandwidth';
import { CloudBillingViewHourlyInstance } from './CloudBillingViewHourlyInstance';
import { CloudBillingViewHourlyInstanceOption } from './CloudBillingViewHourlyInstanceOption';
import { CloudBillingViewHourlySnapshot } from './CloudBillingViewHourlySnapshot';
import { CloudBillingViewHourlyVolume } from './CloudBillingViewHourlyVolume';
import { CloudBillingViewHourlyStorage } from './CloudBillingViewHourlyStorage';

export type CloudBillingViewHourlyResources = {
  instance?: CloudBillingViewHourlyInstance[];
  instanceBandwidth?: CloudBillingViewHourlyInstanceBandwidth[];
  instanceOption?: CloudBillingViewHourlyInstanceOption[];
  snapshot?: CloudBillingViewHourlySnapshot[];
  storage?: CloudBillingViewHourlyStorage[];
  volume?: CloudBillingViewHourlyVolume[];
};
