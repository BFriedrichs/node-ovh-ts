/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudKubeClusterStatusEnum } from './CloudKubeClusterStatusEnum';
import { CloudKubeRegionEnum } from './CloudKubeRegionEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';

export type CloudKubeCluster = {
  controlPlaneIsUpToDate: boolean;
  createdAt: Date;
  customization: CloudProjectKubeCustomization | null;
  id: string;
  isUpToDate: boolean;
  kubeProxyMode: CloudKubeKubeProxyModeEnum;
  name: string;
  nextUpgradeVersions: string[] | null;
  nodesUrl: string;
  privateNetworkConfiguration: CloudKubePrivateNetworkConfiguration | null;
  privateNetworkId: string | null;
  region: CloudKubeRegionEnum;
  status: CloudKubeClusterStatusEnum;
  updatePolicy: string;
  updatedAt: Date;
  url: string;
  version: string;
};
