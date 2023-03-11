/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerServerServices } from './ServicesExpandedTechnicalBaremetalServerServerServices';
import { ServicesExpandedTechnicalBaremetalServerServerCpu } from './ServicesExpandedTechnicalBaremetalServerServerCpu';
import { ServicesExpandedTechnicalBaremetalServerServerNetwork } from './ServicesExpandedTechnicalBaremetalServerServerNetwork';
import { ServicesExpandedTechnicalBaremetalServerServerExtensionCard } from './ServicesExpandedTechnicalBaremetalServerServerExtensionCard';
import { ServicesExpandedTechnicalBaremetalServerServerFrame } from './ServicesExpandedTechnicalBaremetalServerServerFrame';

export type ServicesExpandedTechnicalBaremetalServerServer = {
  cpu: ServicesExpandedTechnicalBaremetalServerServerCpu;
  extensionCard: ServicesExpandedTechnicalBaremetalServerServerExtensionCard | null;
  frame: ServicesExpandedTechnicalBaremetalServerServerFrame;
  network: ServicesExpandedTechnicalBaremetalServerServerNetwork | null;
  range: string;
  services: ServicesExpandedTechnicalBaremetalServerServerServices | null;
  useCase: string | null;
};
