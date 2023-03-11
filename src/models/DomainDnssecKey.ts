/* WARNING: This file is auto-generated . Do not edit manually. */

import { DnssecKeyStatusEnum } from './DnssecKeyStatusEnum';
import { DnssecKeyAlgorithmEnum } from './DnssecKeyAlgorithmEnum';
import { DnssecKeyFlagEnum } from './DnssecKeyFlagEnum';

export type DomainDnssecKey = {
  algorithm: DnssecKeyAlgorithmEnum;
  flags: DnssecKeyFlagEnum;
  id: number;
  publicKey: string;
  status: DnssecKeyStatusEnum;
  tag: number;
};
