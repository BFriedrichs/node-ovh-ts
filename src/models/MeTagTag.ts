/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeTagTagExtra } from './MeTagTagExtra';
import { MeTagStatusEnum } from './MeTagStatusEnum';

export type MeTagTag = {
  creationDate: Date;
  customerCode: string;
  expirationDate: Date | null;
  extra: MeTagTagExtra | null;
  lastUpdate: Date;
  status: MeTagStatusEnum;
  tag: string;
};
