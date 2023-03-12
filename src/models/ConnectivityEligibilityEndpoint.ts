/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityCopperInfo } from './ConnectivityEligibilityCopperInfo';
import { ConnectivityEligibilityPortability } from './ConnectivityEligibilityPortability';
import { ConnectivityEligibilityAddress } from './ConnectivityEligibilityAddress';
import { ConnectivityEligibilityFiberInfo } from './ConnectivityEligibilityFiberInfo';
import { ConnectivityEligibilityEndpointReferenceTypeEnum } from './ConnectivityEligibilityEndpointReferenceTypeEnum';

export type ConnectivityEligibilityEndpoint = {
  address?: ConnectivityEligibilityAddress;
  copperInfo?: ConnectivityEligibilityCopperInfo | null;
  fiberInfo?: ConnectivityEligibilityFiberInfo | null;
  portability?: ConnectivityEligibilityPortability | null;
  reference?: string;
  referenceType?: ConnectivityEligibilityEndpointReferenceTypeEnum;
};
