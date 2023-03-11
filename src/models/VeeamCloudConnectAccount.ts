/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamCloudConnectLocation } from './VeeamCloudConnectLocation';
import { VeeamCloudConnectOffer } from './VeeamCloudConnectOffer';

export type VeeamCloudConnectAccount = {
  location: VeeamCloudConnectLocation;
  productOffer: VeeamCloudConnectOffer;
  serviceName: string;
  vmCount: number | null;
};
