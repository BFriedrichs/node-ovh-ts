/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConnectivityEligibilityBuildingTypeEnum } from './ConnectivityEligibilityBuildingTypeEnum';
import { ConnectivityEligibilityBuildingStair } from './ConnectivityEligibilityBuildingStair';

export type ConnectivityEligibilityBuilding = {
  name: string;
  nro: string | null;
  reference: string;
  stairs: ConnectivityEligibilityBuildingStair;
  type: ConnectivityEligibilityBuildingTypeEnum;
};
