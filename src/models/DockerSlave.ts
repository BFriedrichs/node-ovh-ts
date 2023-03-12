/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveMetrics } from './DockerSlaveMetrics';
import { DockerSlaveStatus } from './DockerSlaveStatus';

export type DockerSlave = {
  createdAt?: Date;
  flavorId?: string;
  id?: string;
  metrics?: DockerSlaveMetrics;
  name?: string;
  region?: string;
  stack?: string;
  state?: DockerSlaveStatus;
  updatedAt?: Date;
};
