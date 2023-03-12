/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsVpsOfferEnum } from './VpsVpsOfferEnum';
import { VpsVpsKeymapEnum } from './VpsVpsKeymapEnum';
import { VpsVpsStateEnum } from './VpsVpsStateEnum';
import { VpsModel } from './VpsModel';
import { VpsVpsNetbootEnum } from './VpsVpsNetbootEnum';

export type VpsVPS = {
  cluster?: string;
  displayName?: string | null;
  keymap?: VpsVpsKeymapEnum | null;
  memoryLimit?: number;
  model?: VpsModel;
  monitoringIpBlocks?: string[];
  name?: string;
  netbootMode?: VpsVpsNetbootEnum;
  offerType?: VpsVpsOfferEnum;
  slaMonitoring?: boolean | null;
  state?: VpsVpsStateEnum;
  vcore?: number;
  zone?: string;
};
