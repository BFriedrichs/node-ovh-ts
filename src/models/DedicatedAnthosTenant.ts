/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedAnthosTenantStatusEnum } from './DedicatedAnthosTenantStatusEnum';
import { DedicatedAnthosStorage } from './DedicatedAnthosStorage';

export type DedicatedAnthosTenant = {
  accessUrl: string;
  description: string;
  id: string;
  location: string;
  name: string;
  serviceName: string;
  status: DedicatedAnthosTenantStatusEnum | null;
  storage: DedicatedAnthosStorage | null;
  version: string;
  vrackId: string;
};
