/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewHourlyStorage } from './CloudBillingViewHourlyStorage';
import { CloudBillingViewHourlyInstanceBandwidth } from './CloudBillingViewHourlyInstanceBandwidth';
import { CloudBillingViewHourlyVolume } from './CloudBillingViewHourlyVolume';
import { CloudBillingViewHourlyInstance } from './CloudBillingViewHourlyInstance';
import { CloudBillingViewHourlyInstanceOption } from './CloudBillingViewHourlyInstanceOption';
import { CloudBillingViewHourlySnapshot } from './CloudBillingViewHourlySnapshot';

export type CloudBillingViewHourlyResources = {
  instance: CloudBillingViewHourlyInstance;
  instanceBandwidth: CloudBillingViewHourlyInstanceBandwidth;
  instanceOption: CloudBillingViewHourlyInstanceOption;
  snapshot: CloudBillingViewHourlySnapshot;
  storage: CloudBillingViewHourlyStorage;
  volume: CloudBillingViewHourlyVolume;
};
