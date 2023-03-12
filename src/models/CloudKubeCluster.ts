/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeClusterStatusEnum } from './CloudKubeClusterStatusEnum';
import { CloudKubeRegionEnum } from './CloudKubeRegionEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';

export type CloudKubeCluster = {
  controlPlaneIsUpToDate?: boolean;
  createdAt?: Date;
  customization?: CloudProjectKubeCustomization | null;
  id?: string;
  isUpToDate?: boolean;
  kubeProxyMode?: CloudKubeKubeProxyModeEnum;
  name?: string;
  nextUpgradeVersions?: string[] | null;
  nodesUrl?: string;
  privateNetworkConfiguration?: CloudKubePrivateNetworkConfiguration | null;
  privateNetworkId?: string | null;
  region?: CloudKubeRegionEnum;
  status?: CloudKubeClusterStatusEnum;
  updatePolicy?: string;
  updatedAt?: Date;
  url?: string;
  version?: string;
};
