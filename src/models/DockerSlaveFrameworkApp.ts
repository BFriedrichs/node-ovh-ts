/* WARNING: This file is auto-generated . Do not edit manually. */

import { DockerSlaveFrameworkAppVolume } from './DockerSlaveFrameworkAppVolume';
import { DockerSlaveFrameworkAppEnvironment } from './DockerSlaveFrameworkAppEnvironment';
import { DockerSlaveFrameworkAppPort } from './DockerSlaveFrameworkAppPort';

export type DockerSlaveFrameworkApp = {
  cpu: number | null;
  env: DockerSlaveFrameworkAppEnvironment;
  id: string | null;
  image: string | null;
  instances: number | null;
  mem: number | null;
  ports: DockerSlaveFrameworkAppPort;
  status: string | null;
  volumes: DockerSlaveFrameworkAppVolume;
};
