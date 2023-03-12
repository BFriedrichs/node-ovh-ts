/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectKubeCreationNodePool } from './CloudProjectKubeCreationNodePool';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';
import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';

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
