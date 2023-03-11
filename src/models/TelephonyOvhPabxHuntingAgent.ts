/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxHuntingAgentStatusEnum } from './TelephonyOvhPabxHuntingAgentStatusEnum';
import { TelephonyOvhPabxHuntingAgentTypeEnum } from './TelephonyOvhPabxHuntingAgentTypeEnum';

export type TelephonyOvhPabxHuntingAgent = {
  agentId: number;
  breakStatus: number | null;
  description: string | null;
  number: string;
  simultaneousLines: number;
  status: TelephonyOvhPabxHuntingAgentStatusEnum;
  timeout: number;
  type: TelephonyOvhPabxHuntingAgentTypeEnum;
  wrapUpTime: number;
};
