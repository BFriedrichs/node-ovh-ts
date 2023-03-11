/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudSecurityOptionSecurityOptionEnum } from './DedicatedCloudSecurityOptionSecurityOptionEnum';
import { DedicatedCloudSecurityOptionErrorMessage } from './DedicatedCloudSecurityOptionErrorMessage';
import { DedicatedCloudSecurityOptionStateEnum } from './DedicatedCloudSecurityOptionStateEnum';

export type DedicatedCloudSecurityOptionCompatibilityMatrixEntry = {
  compatible: boolean;
  description: string;
  enabled: boolean;
  name: DedicatedCloudSecurityOptionSecurityOptionEnum;
  reason: DedicatedCloudSecurityOptionErrorMessage | null;
  state: DedicatedCloudSecurityOptionStateEnum;
};
