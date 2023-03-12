/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectPopConfigTypeEnum } from './OvhcloudconnectPopConfigTypeEnum';
import { OvhcloudconnectPopConfigStatusEnum } from './OvhcloudconnectPopConfigStatusEnum';

export type OvhcloudconnectPopConfig = {
  customerBgpArea?: number;
  id?: number;
  interfaceId: number;
  ovhBgpArea?: number;
  status?: OvhcloudconnectPopConfigStatusEnum;
  subnet?: string | null;
  type: OvhcloudconnectPopConfigTypeEnum;
};
