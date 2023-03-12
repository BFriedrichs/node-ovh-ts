/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectDatacenterExtraConfigTypeEnum } from './OvhcloudconnectDatacenterExtraConfigTypeEnum';
import { OvhcloudconnectPopConfigStatusEnum } from './OvhcloudconnectPopConfigStatusEnum';

export type OvhcloudconnectDatacenterExtraConfig = {
  bgpNeighborArea?: number | null;
  bgpNeighborIp?: string | null;
  id?: number;
  nextHop?: string | null;
  status?: OvhcloudconnectPopConfigStatusEnum;
  subnet?: string | null;
  type: OvhcloudconnectDatacenterExtraConfigTypeEnum;
};
