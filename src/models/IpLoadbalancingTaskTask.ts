/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingTaskStatusEnum } from './IpLoadbalancingTaskStatusEnum';
import { IpLoadBalancingTaskActionEnum } from './IpLoadBalancingTaskActionEnum';

export type IpLoadbalancingTaskTask = {
  action?: IpLoadBalancingTaskActionEnum;
  creationDate?: Date;
  doneDate?: Date | null;
  id?: number;
  progress?: number;
  status?: IpLoadbalancingTaskStatusEnum;
  zones?: string[];
};
