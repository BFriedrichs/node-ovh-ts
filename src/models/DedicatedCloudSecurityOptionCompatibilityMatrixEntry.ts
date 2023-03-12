/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudSecurityOptionSecurityOptionEnum } from './DedicatedCloudSecurityOptionSecurityOptionEnum';
import { DedicatedCloudSecurityOptionStateEnum } from './DedicatedCloudSecurityOptionStateEnum';
import { DedicatedCloudSecurityOptionErrorMessage } from './DedicatedCloudSecurityOptionErrorMessage';

export type DedicatedCloudSecurityOptionCompatibilityMatrixEntry = {
  compatible: boolean;
  description: string;
  enabled: boolean;
  name: DedicatedCloudSecurityOptionSecurityOptionEnum;
  reason: DedicatedCloudSecurityOptionErrorMessage | null;
  state: DedicatedCloudSecurityOptionStateEnum;
};
