/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudOptionStateEnum } from './DedicatedCloudOptionStateEnum';
import { DedicatedCloudOptionDatacenterOptionState } from './DedicatedCloudOptionDatacenterOptionState';

export type DedicatedCloudNsxt = {
  datacentersState: DedicatedCloudOptionDatacenterOptionState[] | null;
  state: DedicatedCloudOptionStateEnum;
  url: string | null;
  version: string | null;
};
