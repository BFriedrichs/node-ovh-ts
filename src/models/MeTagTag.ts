/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeTagStatusEnum } from './MeTagStatusEnum';
import { MeTagTagExtra } from './MeTagTagExtra';

export type MeTagTag = {
  creationDate?: Date;
  customerCode?: string;
  expirationDate?: Date | null;
  extra?: MeTagTagExtra | null;
  lastUpdate?: Date;
  status?: MeTagStatusEnum;
  tag?: string;
};
