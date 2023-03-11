/* WARNING: This file is auto-generated . Do not edit manually. */

import { HorizonViewStateEnum } from './HorizonViewStateEnum';
import { HorizonViewZone } from './HorizonViewZone';

export type HorizonViewDedicatedHorizon = {
  masterZone: HorizonViewZone;
  privateCloudName: string;
  privateCloudZone: HorizonViewZone;
  publicUrl: string;
  state: HorizonViewStateEnum;
  storageAccelerator: boolean;
  version: string;
};
