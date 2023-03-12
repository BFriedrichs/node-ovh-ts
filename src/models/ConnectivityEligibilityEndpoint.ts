/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityCopperInfo } from './ConnectivityEligibilityCopperInfo';
import { ConnectivityEligibilityEndpointReferenceTypeEnum } from './ConnectivityEligibilityEndpointReferenceTypeEnum';
import { ConnectivityEligibilityFiberInfo } from './ConnectivityEligibilityFiberInfo';
import { ConnectivityEligibilityAddress } from './ConnectivityEligibilityAddress';
import { ConnectivityEligibilityPortability } from './ConnectivityEligibilityPortability';

export type ConnectivityEligibilityEndpoint = {
  address: ConnectivityEligibilityAddress;
  copperInfo: ConnectivityEligibilityCopperInfo | null;
  fiberInfo: ConnectivityEligibilityFiberInfo | null;
  portability: ConnectivityEligibilityPortability | null;
  reference: string;
  referenceType: ConnectivityEligibilityEndpointReferenceTypeEnum;
};
