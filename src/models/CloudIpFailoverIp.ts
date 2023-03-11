/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudIpIpSubTypeEnum } from './CloudIpIpSubTypeEnum';
import { CloudIpIpStatusEnum } from './CloudIpIpStatusEnum';

export type CloudIpFailoverIp = {
  block: string | null;
  continentCode: string | null;
  geoloc: string | null;
  id: string;
  ip: string | null;
  progress: number;
  routedTo: string;
  status: CloudIpIpStatusEnum;
  subType: CloudIpIpSubTypeEnum;
};
