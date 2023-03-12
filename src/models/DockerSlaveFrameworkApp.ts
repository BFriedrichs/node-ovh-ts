/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveFrameworkAppVolume } from './DockerSlaveFrameworkAppVolume';
import { DockerSlaveFrameworkAppPort } from './DockerSlaveFrameworkAppPort';
import { DockerSlaveFrameworkAppEnvironment } from './DockerSlaveFrameworkAppEnvironment';

export type DockerSlaveFrameworkApp = {
  cpu?: number | null;
  env?: DockerSlaveFrameworkAppEnvironment[];
  id?: string | null;
  image?: string | null;
  instances?: number | null;
  mem?: number | null;
  ports?: DockerSlaveFrameworkAppPort[];
  status?: string | null;
  volumes?: DockerSlaveFrameworkAppVolume[];
};
