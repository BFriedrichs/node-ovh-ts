/* WARNING: This file is auto-generated . Do not edit manually. */

import { DnssecKeyFlagEnum } from './DnssecKeyFlagEnum';
import { DnssecKeyAlgorithmEnum } from './DnssecKeyAlgorithmEnum';
import { DnssecKeyStatusEnum } from './DnssecKeyStatusEnum';

export type DomainDnssecKey = {
  algorithm: DnssecKeyAlgorithmEnum;
  flags: DnssecKeyFlagEnum;
  id: number;
  publicKey: string;
  status: DnssecKeyStatusEnum;
  tag: number;
};
