/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamCloudConnectOffer } from './VeeamCloudConnectOffer';
import { VeeamCloudConnectLocation } from './VeeamCloudConnectLocation';

export type VeeamCloudConnectAccount = {
  location?: VeeamCloudConnectLocation;
  productOffer?: VeeamCloudConnectOffer;
  serviceName?: string;
  vmCount?: number | null;
};
