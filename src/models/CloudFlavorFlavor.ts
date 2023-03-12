/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudFlavorCapability } from './CloudFlavorCapability';
import { CloudFlavorFlavorPlanCodes } from './CloudFlavorFlavorPlanCodes';

export type CloudFlavorFlavor = {
  available?: boolean;
  capabilities?: CloudFlavorCapability[];
  disk?: number;
  id?: string;
  inboundBandwidth?: number | null;
  name?: string;
  osType?: string;
  outboundBandwidth?: number | null;
  planCodes?: CloudFlavorFlavorPlanCodes;
  quota?: number;
  ram?: number;
  region?: string;
  type?: string;
  vcpus?: number;
};
