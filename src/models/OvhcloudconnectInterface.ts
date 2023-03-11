/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectInterfaceTerminationTypeEnum } from './OvhcloudconnectInterfaceTerminationTypeEnum';
import { OvhcloudconnectInterfaceLightStatusEnum } from './OvhcloudconnectInterfaceLightStatusEnum';
import { OvhcloudconnectInterfaceStatusEnum } from './OvhcloudconnectInterfaceStatusEnum';

export type OvhcloudconnectInterface = {
  deviceDisplayName: string | null;
  deviceRackDisplayName: string | null;
  id: number;
  incomingLightStatus: OvhcloudconnectInterfaceLightStatusEnum;
  incomingLightValue: number | null;
  interfaceName: string | null;
  interfaceStatus: OvhcloudconnectInterfaceLightStatusEnum;
  interfaceStatusLastUpdate: Date;
  interfaceTerminationType: OvhcloudconnectInterfaceTerminationTypeEnum | null;
  lightLastUpdate: Date;
  outgoingLightStatus: OvhcloudconnectInterfaceLightStatusEnum;
  outgoingLightValue: number | null;
  status: OvhcloudconnectInterfaceStatusEnum;
};
