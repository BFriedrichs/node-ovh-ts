/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectKubeCreationNodePool } from './CloudProjectKubeCreationNodePool';
import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';

export type CloudProjectKubeCreation = {
  customization: CloudProjectKubeCustomization | null;
  kubeProxyMode: CloudKubeKubeProxyModeEnum;
  name: string;
  nodepool: CloudProjectKubeCreationNodePool;
  privateNetworkConfiguration: CloudKubePrivateNetworkConfiguration;
  privateNetworkId: string;
  region?: string;
  updatePolicy: CloudKubeUpdatePolicyEnum | null;
  version: CloudKubeVersionEnum;
};
