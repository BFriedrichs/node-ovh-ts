/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerVrack } from './ServicesExpandedTechnicalBaremetalServerVrack';
import { ServicesExpandedTechnicalBaremetalServerBandwidth } from './ServicesExpandedTechnicalBaremetalServerBandwidth';
import { ServicesExpandedTechnicalBaremetalServerServer } from './ServicesExpandedTechnicalBaremetalServerServer';
import { ServicesExpandedTechnicalBaremetalServerGpu } from './ServicesExpandedTechnicalBaremetalServerGpu';
import { ServicesExpandedTechnicalBaremetalServerStorage } from './ServicesExpandedTechnicalBaremetalServerStorage';
import { ServicesExpandedTechnicalBaremetalServerMemory } from './ServicesExpandedTechnicalBaremetalServerMemory';

export type ServicesExpandedTechnicalBaremetalServer = {
  bandwidth: ServicesExpandedTechnicalBaremetalServerBandwidth | null;
  gpu: ServicesExpandedTechnicalBaremetalServerGpu | null;
  memory: ServicesExpandedTechnicalBaremetalServerMemory | null;
  server: ServicesExpandedTechnicalBaremetalServerServer | null;
  storage: ServicesExpandedTechnicalBaremetalServerStorage | null;
  vrack: ServicesExpandedTechnicalBaremetalServerVrack | null;
};
