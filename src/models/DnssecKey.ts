/* WARNING: This file is auto-generated . Do not edit manually. */

import { DnssecKeyFlagEnum } from './DnssecKeyFlagEnum';
import { DnssecKeyAlgorithmEnum } from './DnssecKeyAlgorithmEnum';

export type DnssecKey = {
  algorithm?: DnssecKeyAlgorithmEnum;
  flags?: DnssecKeyFlagEnum;
  publicKey?: string;
  tag?: number;
};
