/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerServerServicesSecureComputingTechnologyEnum } from './ServicesExpandedTechnicalBaremetalServerServerServicesSecureComputingTechnologyEnum';
import { ServicesExpandedTechnicalBaremetalServerServerServicesSupportLevelEnum } from './ServicesExpandedTechnicalBaremetalServerServerServicesSupportLevelEnum';

export type ServicesExpandedTechnicalBaremetalServerServerServices = {
  antiddos: string;
  includedBackup: number;
  ipmiAvailable: boolean;
  ipv4RangeIncluded: string | null;
  ipv6RangeIncluded: string | null;
  kvmipAvailable: boolean;
  olaAvailable: boolean;
  secureComputingTechnology: ServicesExpandedTechnicalBaremetalServerServerServicesSecureComputingTechnologyEnum | null;
  sla: number;
  supportLevel: ServicesExpandedTechnicalBaremetalServerServerServicesSupportLevelEnum | null;
};
