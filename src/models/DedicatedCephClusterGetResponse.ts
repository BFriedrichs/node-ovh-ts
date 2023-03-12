/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCephClusterGetResponseCrushTunablesEnum } from './DedicatedCephClusterGetResponseCrushTunablesEnum';
import { DedicatedCephClusterGetResponseStateEnum } from './DedicatedCephClusterGetResponseStateEnum';
import { DedicatedCephClusterGetResponseStatusEnum } from './DedicatedCephClusterGetResponseStatusEnum';

export type DedicatedCephClusterGetResponse = {
  cephMons: string[];
  cephVersion: string;
  createDate: string;
  crushTunables: DedicatedCephClusterGetResponseCrushTunablesEnum;
  label: string;
  region: string;
  serviceName: string;
  size: number;
  state: DedicatedCephClusterGetResponseStateEnum;
  status: DedicatedCephClusterGetResponseStatusEnum;
  updateDate: string;
};
