/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudManagementInterfaceEnum } from './DedicatedCloudManagementInterfaceEnum';
import { DedicatedCloudProductReferenceEnum } from './DedicatedCloudProductReferenceEnum';
import { DedicatedCloudUserAccessPolicyEnum } from './DedicatedCloudUserAccessPolicyEnum';
import { DedicatedCloudUserLogoutPolicyEnum } from './DedicatedCloudUserLogoutPolicyEnum';
import { DedicatedCloudBillingTypeEnum } from './DedicatedCloudBillingTypeEnum';
import { DedicatedCloudStateEnum } from './DedicatedCloudStateEnum';
import { DedicatedCloudVersion } from './DedicatedCloudVersion';
import { DedicatedCloudGenerationEnum } from './DedicatedCloudGenerationEnum';

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
