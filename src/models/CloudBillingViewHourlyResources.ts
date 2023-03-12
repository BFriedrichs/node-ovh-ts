/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewHourlyInstance } from './CloudBillingViewHourlyInstance';
import { CloudBillingViewHourlyInstanceOption } from './CloudBillingViewHourlyInstanceOption';
import { CloudBillingViewHourlySnapshot } from './CloudBillingViewHourlySnapshot';
import { CloudBillingViewHourlyVolume } from './CloudBillingViewHourlyVolume';
import { CloudBillingViewHourlyStorage } from './CloudBillingViewHourlyStorage';
import { CloudBillingViewHourlyInstanceBandwidth } from './CloudBillingViewHourlyInstanceBandwidth';

export type CloudBillingViewHourlyResources = {
  instance: CloudBillingViewHourlyInstance[];
  instanceBandwidth: CloudBillingViewHourlyInstanceBandwidth[];
  instanceOption: CloudBillingViewHourlyInstanceOption[];
  snapshot: CloudBillingViewHourlySnapshot[];
  storage: CloudBillingViewHourlyStorage[];
  volume: CloudBillingViewHourlyVolume[];
};
