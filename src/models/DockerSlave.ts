/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveStatus } from './DockerSlaveStatus';
import { DockerSlaveMetrics } from './DockerSlaveMetrics';

export type DockerSlave = {
  createdAt: Date;
  flavorId: string;
  id: string;
  metrics: DockerSlaveMetrics;
  name: string;
  region: string;
  stack: string;
  state: DockerSlaveStatus;
  updatedAt: Date;
};
