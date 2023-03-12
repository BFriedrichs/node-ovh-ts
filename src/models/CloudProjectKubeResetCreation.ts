/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';
import { CloudKubeResetWorkerNodesPolicyEnum } from './CloudKubeResetWorkerNodesPolicyEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';

export type CloudProjectKubeResetCreation = {
  customization?: CloudProjectKubeCustomization;
  kubeProxyMode?: CloudKubeKubeProxyModeEnum;
  name?: string;
  privateNetworkConfiguration?: CloudKubePrivateNetworkConfiguration;
  privateNetworkId?: string;
  updatePolicy?: CloudKubeUpdatePolicyEnum;
  version?: CloudKubeVersionEnum;
  workerNodesPolicy?: CloudKubeResetWorkerNodesPolicyEnum;
};
