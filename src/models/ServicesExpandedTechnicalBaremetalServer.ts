/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerStorage } from './ServicesExpandedTechnicalBaremetalServerStorage';
import { ServicesExpandedTechnicalBaremetalServerMemory } from './ServicesExpandedTechnicalBaremetalServerMemory';
import { ServicesExpandedTechnicalBaremetalServerBandwidth } from './ServicesExpandedTechnicalBaremetalServerBandwidth';
import { ServicesExpandedTechnicalBaremetalServerVrack } from './ServicesExpandedTechnicalBaremetalServerVrack';
import { ServicesExpandedTechnicalBaremetalServerGpu } from './ServicesExpandedTechnicalBaremetalServerGpu';
import { ServicesExpandedTechnicalBaremetalServerServer } from './ServicesExpandedTechnicalBaremetalServerServer';

export type ServicesExpandedTechnicalBaremetalServer = {
  bandwidth: ServicesExpandedTechnicalBaremetalServerBandwidth | null;
  gpu: ServicesExpandedTechnicalBaremetalServerGpu | null;
  memory: ServicesExpandedTechnicalBaremetalServerMemory | null;
  server: ServicesExpandedTechnicalBaremetalServerServer | null;
  storage: ServicesExpandedTechnicalBaremetalServerStorage | null;
  vrack: ServicesExpandedTechnicalBaremetalServerVrack | null;
};
