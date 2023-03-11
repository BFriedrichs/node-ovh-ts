/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsIpServiceStatusStateEnum } from './VpsIpServiceStatusStateEnum';
import { VpsIpServiceStatusService } from './VpsIpServiceStatusService';

export type VpsIpServiceStatus = {
  dns: VpsIpServiceStatusService;
  http: VpsIpServiceStatusService;
  https: VpsIpServiceStatusService;
  ping: VpsIpServiceStatusStateEnum;
  smtp: VpsIpServiceStatusService;
  ssh: VpsIpServiceStatusService;
  tools: VpsIpServiceStatusStateEnum | null;
};
