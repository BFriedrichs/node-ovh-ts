/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodePoolStatusEnum } from './CloudKubeNodePoolStatusEnum';
import { CloudKubeNodePoolAutoscaling } from './CloudKubeNodePoolAutoscaling';
import { CloudKubeNodePoolSizeStatusEnum } from './CloudKubeNodePoolSizeStatusEnum';
import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';

export type CloudKubeNodePool = {
  antiAffinity: boolean;
  autoscale: boolean;
  autoscaling: CloudKubeNodePoolAutoscaling;
  availableNodes: number;
  createdAt: Date;
  currentNodes: number;
  desiredNodes: number;
  flavor: string;
  id: string;
  maxNodes: number;
  minNodes: number;
  monthlyBilled: boolean;
  name: string;
  projectId: string;
  sizeStatus: CloudKubeNodePoolSizeStatusEnum;
  status: CloudKubeNodePoolStatusEnum;
  template: CloudKubeNodePoolTemplate;
  upToDateNodes: number;
  updatedAt: Date;
};
