/* WARNING: This file is auto-generated . Do not edit manually. */

import { ClusterHadoopBillingNameEnum } from './ClusterHadoopBillingNameEnum';
import { ClusterHadoopNodeProfileEnum } from './ClusterHadoopNodeProfileEnum';
import { ClusterHadoopNodeStateEnum } from './ClusterHadoopNodeStateEnum';

export type ClusterHadoopNode = {
  billingProfileName?: ClusterHadoopBillingNameEnum;
  hostname?: string;
  ip?: string;
  isRemovable?: boolean;
  softwareProfile?: ClusterHadoopNodeProfileEnum;
  state?: ClusterHadoopNodeStateEnum;
};
