/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerServerNetwork } from './ServicesExpandedTechnicalBaremetalServerServerNetwork';
import { ServicesExpandedTechnicalBaremetalServerServerCpu } from './ServicesExpandedTechnicalBaremetalServerServerCpu';
import { ServicesExpandedTechnicalBaremetalServerServerFrame } from './ServicesExpandedTechnicalBaremetalServerServerFrame';
import { ServicesExpandedTechnicalBaremetalServerServerServices } from './ServicesExpandedTechnicalBaremetalServerServerServices';
import { ServicesExpandedTechnicalBaremetalServerServerExtensionCard } from './ServicesExpandedTechnicalBaremetalServerServerExtensionCard';

export type ServicesExpandedTechnicalBaremetalServerServer = {
  cpu: ServicesExpandedTechnicalBaremetalServerServerCpu;
  extensionCard: ServicesExpandedTechnicalBaremetalServerServerExtensionCard | null;
  frame: ServicesExpandedTechnicalBaremetalServerServerFrame;
  network: ServicesExpandedTechnicalBaremetalServerServerNetwork | null;
  range: string;
  services: ServicesExpandedTechnicalBaremetalServerServerServices | null;
  useCase: string | null;
};
