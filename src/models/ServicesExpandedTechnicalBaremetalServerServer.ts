/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerServerExtensionCard } from './ServicesExpandedTechnicalBaremetalServerServerExtensionCard';
import { ServicesExpandedTechnicalBaremetalServerServerFrame } from './ServicesExpandedTechnicalBaremetalServerServerFrame';
import { ServicesExpandedTechnicalBaremetalServerServerNetwork } from './ServicesExpandedTechnicalBaremetalServerServerNetwork';
import { ServicesExpandedTechnicalBaremetalServerServerServices } from './ServicesExpandedTechnicalBaremetalServerServerServices';
import { ServicesExpandedTechnicalBaremetalServerServerCpu } from './ServicesExpandedTechnicalBaremetalServerServerCpu';

export type ServicesExpandedTechnicalBaremetalServerServer = {
  cpu?: ServicesExpandedTechnicalBaremetalServerServerCpu;
  extensionCard?: ServicesExpandedTechnicalBaremetalServerServerExtensionCard | null;
  frame?: ServicesExpandedTechnicalBaremetalServerServerFrame;
  network?: ServicesExpandedTechnicalBaremetalServerServerNetwork | null;
  range?: string;
  services?: ServicesExpandedTechnicalBaremetalServerServerServices | null;
  useCase?: string | null;
};
