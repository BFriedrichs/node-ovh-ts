/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeKubeProxyModeEnum } from './CloudKubeKubeProxyModeEnum';
import { CloudKubeResetWorkerNodesPolicyEnum } from './CloudKubeResetWorkerNodesPolicyEnum';
import { CloudProjectKubeCustomization } from './CloudProjectKubeCustomization';
import { CloudKubeVersionEnum } from './CloudKubeVersionEnum';
import { CloudKubePrivateNetworkConfiguration } from './CloudKubePrivateNetworkConfiguration';
import { CloudKubeUpdatePolicyEnum } from './CloudKubeUpdatePolicyEnum';

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
