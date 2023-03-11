/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsVpsOfferEnum } from './VpsVpsOfferEnum';
import { VpsModel } from './VpsModel';
import { VpsVpsKeymapEnum } from './VpsVpsKeymapEnum';
import { VpsVpsNetbootEnum } from './VpsVpsNetbootEnum';
import { VpsVpsStateEnum } from './VpsVpsStateEnum';

export type VpsVPS = {
  cluster: string;
  displayName: string | null;
  keymap: VpsVpsKeymapEnum | null;
  memoryLimit: number;
  model: VpsModel;
  monitoringIpBlocks: string;
  name: string;
  netbootMode: VpsVpsNetbootEnum;
  offerType: VpsVpsOfferEnum;
  slaMonitoring: boolean | null;
  state: VpsVpsStateEnum;
  vcore: number;
  zone: string;
};
