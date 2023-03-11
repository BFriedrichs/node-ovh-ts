/* WARNING: This file is auto-generated . Do not edit manually. */

import { DnssecKeyAlgorithmEnum } from './DnssecKeyAlgorithmEnum';
import { DnssecKeyFlagEnum } from './DnssecKeyFlagEnum';

export type DnssecKey = {
  algorithm: DnssecKeyAlgorithmEnum;
  flags: DnssecKeyFlagEnum;
  publicKey: string;
  tag: number;
};
