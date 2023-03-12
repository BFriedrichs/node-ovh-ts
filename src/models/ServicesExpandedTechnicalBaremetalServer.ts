/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerServer } from './ServicesExpandedTechnicalBaremetalServerServer';
import { ServicesExpandedTechnicalBaremetalServerGpu } from './ServicesExpandedTechnicalBaremetalServerGpu';
import { ServicesExpandedTechnicalBaremetalServerMemory } from './ServicesExpandedTechnicalBaremetalServerMemory';
import { ServicesExpandedTechnicalBaremetalServerBandwidth } from './ServicesExpandedTechnicalBaremetalServerBandwidth';
import { ServicesExpandedTechnicalBaremetalServerVrack } from './ServicesExpandedTechnicalBaremetalServerVrack';
import { ServicesExpandedTechnicalBaremetalServerStorage } from './ServicesExpandedTechnicalBaremetalServerStorage';

export type ServicesExpandedTechnicalBaremetalServer = {
  bandwidth?: ServicesExpandedTechnicalBaremetalServerBandwidth | null;
  gpu?: ServicesExpandedTechnicalBaremetalServerGpu | null;
  memory?: ServicesExpandedTechnicalBaremetalServerMemory | null;
  server?: ServicesExpandedTechnicalBaremetalServerServer | null;
  storage?: ServicesExpandedTechnicalBaremetalServerStorage | null;
  vrack?: ServicesExpandedTechnicalBaremetalServerVrack | null;
};
