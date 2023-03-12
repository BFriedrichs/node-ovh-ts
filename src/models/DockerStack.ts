/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveMetrics } from './DockerSlaveMetrics';

export type DockerStack = {
  cluster: string | null;
  createdAt: Date;
  loadBalancer: string;
  metrics: DockerSlaveMetrics;
  name: string;
  slaves: string[];
  updatedAt: Date;
};
