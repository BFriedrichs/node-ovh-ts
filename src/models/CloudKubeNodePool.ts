/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodePoolAutoscaling } from './CloudKubeNodePoolAutoscaling';
import { CloudKubeNodePoolSizeStatusEnum } from './CloudKubeNodePoolSizeStatusEnum';
import { CloudKubeNodePoolStatusEnum } from './CloudKubeNodePoolStatusEnum';
import { CloudKubeNodePoolTemplate } from './CloudKubeNodePoolTemplate';

export type CloudKubeNodePool = {
  antiAffinity?: boolean;
  autoscale?: boolean;
  autoscaling?: CloudKubeNodePoolAutoscaling;
  availableNodes?: number;
  createdAt?: Date;
  currentNodes?: number;
  desiredNodes?: number;
  flavor?: string;
  id?: string;
  maxNodes?: number;
  minNodes?: number;
  monthlyBilled?: boolean;
  name?: string;
  projectId?: string;
  sizeStatus?: CloudKubeNodePoolSizeStatusEnum;
  status?: CloudKubeNodePoolStatusEnum;
  template?: CloudKubeNodePoolTemplate;
  upToDateNodes?: number;
  updatedAt?: Date;
};
