/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubeResetWorkerNodesPolicyEnum } from './CloudKubeResetWorkerNodesPolicyEnum';
import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';

export type CloudProjectKubeResetCreation = {
  customization: CloudProjectKubeCustomization;
  kubeProxyMode: CloudKubeKubeProxyModeEnum;
  name: string;
  privateNetworkConfiguration: CloudKubePrivateNetworkConfiguration;
  privateNetworkId: string;
  updatePolicy: CloudKubeUpdatePolicyEnum;
  version: CloudKubeVersionEnum;
  workerNodesPolicy: CloudKubeResetWorkerNodesPolicyEnum;
};
