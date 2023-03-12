/* WARNING: This file is auto-generated . Do not edit manually. */

import { ClusterHadoopNodeProfileEnum } from './ClusterHadoopNodeProfileEnum';
import { ClusterHadoopBillingNameEnum } from './ClusterHadoopBillingNameEnum';
import { ClusterHadoopNodeStateEnum } from './ClusterHadoopNodeStateEnum';

export type ClusterHadoopNode = {
  billingProfileName: ClusterHadoopBillingNameEnum;
  hostname: string;
  ip: string;
  isRemovable: boolean;
  softwareProfile: ClusterHadoopNodeProfileEnum;
  state: ClusterHadoopNodeStateEnum;
};
