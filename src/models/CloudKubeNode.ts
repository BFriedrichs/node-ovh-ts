/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeNodeStatusEnum } from './CloudKubeNodeStatusEnum';

export type CloudKubeNode = {
  createdAt: Date;
  deployedAt: Date | null;
  flavor: string;
  id: string;
  instanceId: string | null;
  isUpToDate: boolean;
  name: string;
  nodePoolId: string;
  projectId: string;
  status: CloudKubeNodeStatusEnum;
  updatedAt: Date;
  version: string;
};
