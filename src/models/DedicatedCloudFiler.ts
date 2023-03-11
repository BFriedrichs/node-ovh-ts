/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudFilerConnexionStateEnum } from './DedicatedCloudFilerConnexionStateEnum';
import { DedicatedCloudFilerNodeTypeEnum } from './DedicatedCloudFilerNodeTypeEnum';
import { DedicatedCloudFilerStateEnum } from './DedicatedCloudFilerStateEnum';
import { DedicatedCloudRessourcesBillingTypeEnum } from './DedicatedCloudRessourcesBillingTypeEnum';

export type DedicatedCloudFiler = {
  activeNode: DedicatedCloudFilerNodeTypeEnum | null;
  billingType: DedicatedCloudRessourcesBillingTypeEnum | null;
  connectionState: DedicatedCloudFilerConnexionStateEnum | null;
  filerId: number;
  fullProfile: string;
  isManagedByOvh: boolean;
  master: string;
  name: string;
  profile: string;
  resourceName: string | null;
  size: number;
  slave: string | null;
  spaceFree: number | null;
  spaceProvisionned: number | null;
  spaceUsed: number | null;
  state: DedicatedCloudFilerStateEnum;
  vmTotal: number | null;
};
