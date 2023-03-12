/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';
import { CloudProjectKubeCreationNodePool } from './CloudProjectKubeCreationNodePool';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';

export type CloudProjectKubeCreation = {
  customization?: CloudProjectKubeCustomization | null;
  kubeProxyMode?: CloudKubeKubeProxyModeEnum;
  name?: string;
  nodepool?: CloudProjectKubeCreationNodePool;
  privateNetworkConfiguration?: CloudKubePrivateNetworkConfiguration;
  privateNetworkId?: string;
  region: string;
  updatePolicy?: CloudKubeUpdatePolicyEnum | null;
  version?: CloudKubeVersionEnum;
};
