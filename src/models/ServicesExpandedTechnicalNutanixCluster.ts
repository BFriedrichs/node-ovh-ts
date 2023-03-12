/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalNutanixClusterFeatures } from './ServicesExpandedTechnicalNutanixClusterFeatures';
import { ServicesExpandedTechnicalNutanixClusterService } from './ServicesExpandedTechnicalNutanixClusterService';
import { ServicesExpandedTechnicalNutanixClusterLicense } from './ServicesExpandedTechnicalNutanixClusterLicense';
import { ServicesExpandedTechnicalNutanixClusterCluster } from './ServicesExpandedTechnicalNutanixClusterCluster';

export type ServicesExpandedTechnicalNutanixCluster = {
  cluster: ServicesExpandedTechnicalNutanixClusterCluster | null;
  features: ServicesExpandedTechnicalNutanixClusterFeatures[] | null;
  license: ServicesExpandedTechnicalNutanixClusterLicense | null;
  service: ServicesExpandedTechnicalNutanixClusterService | null;
};
