/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsIpServiceStatusService } from './VpsIpServiceStatusService';
import { VpsIpServiceStatusStateEnum } from './VpsIpServiceStatusStateEnum';

export type VpsIpServiceStatus = {
  dns: VpsIpServiceStatusService;
  http: VpsIpServiceStatusService;
  https: VpsIpServiceStatusService;
  ping: VpsIpServiceStatusStateEnum;
  smtp: VpsIpServiceStatusService;
  ssh: VpsIpServiceStatusService;
  tools: VpsIpServiceStatusStateEnum | null;
};
