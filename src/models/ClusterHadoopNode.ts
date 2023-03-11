/* WARNING: This file is auto-generated . Do not edit manually. */

import { ClusterHadoopBillingNameEnum } from './ClusterHadoopBillingNameEnum';
import { ClusterHadoopNodeStateEnum } from './ClusterHadoopNodeStateEnum';
import { ClusterHadoopNodeProfileEnum } from './ClusterHadoopNodeProfileEnum';

export type ClusterHadoopNode = {
  billingProfileName: ClusterHadoopBillingNameEnum;
  hostname: string;
  ip: string;
  isRemovable: boolean;
  softwareProfile: ClusterHadoopNodeProfileEnum;
  state: ClusterHadoopNodeStateEnum;
};
