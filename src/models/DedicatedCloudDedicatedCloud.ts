/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudUserLogoutPolicyEnum } from './DedicatedCloudUserLogoutPolicyEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';
import { DedicatedCloudGenerationEnum } from './DedicatedCloudGenerationEnum';
import { DedicatedCloudManagementInterfaceEnum } from './DedicatedCloudManagementInterfaceEnum';
import { DedicatedCloudVersion } from './DedicatedCloudVersion';
import { DedicatedCloudUserAccessPolicyEnum } from './DedicatedCloudUserAccessPolicyEnum';
import { DedicatedCloudProductReferenceEnum } from './DedicatedCloudProductReferenceEnum';
import { DedicatedCloudBillingTypeEnum } from './DedicatedCloudBillingTypeEnum';

export type DedicatedCloudDedicatedCloud = {
  advancedSecurity: boolean;
  bandwidth: string;
  billingType: DedicatedCloudBillingTypeEnum;
  certifiedInterfaceUrl: string;
  commercialRange: string;
  description: string;
  generation: DedicatedCloudGenerationEnum;
  location: string;
  managementInterface: DedicatedCloudManagementInterfaceEnum;
  productReference: DedicatedCloudProductReferenceEnum;
  serviceName: string;
  servicePackName: string | null;
  spla: boolean;
  sslV3: boolean | null;
  state: DedicatedCloudStateEnum;
  userAccessPolicy: DedicatedCloudUserAccessPolicyEnum;
  userLimitConcurrentSession: number;
  userLogoutPolicy: DedicatedCloudUserLogoutPolicyEnum;
  userSessionTimeout: number;
  vScopeUrl: string;
  version: DedicatedCloudVersion;
  webInterfaceUrl: string;
};
