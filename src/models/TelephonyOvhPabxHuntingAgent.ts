/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxHuntingAgentTypeEnum } from './TelephonyOvhPabxHuntingAgentTypeEnum';
import { TelephonyOvhPabxHuntingAgentStatusEnum } from './TelephonyOvhPabxHuntingAgentStatusEnum';

export type TelephonyOvhPabxHuntingAgent = {
  agentId?: number;
  breakStatus?: number | null;
  description?: string | null;
  number?: string;
  simultaneousLines?: number;
  status?: TelephonyOvhPabxHuntingAgentStatusEnum;
  timeout?: number;
  type?: TelephonyOvhPabxHuntingAgentTypeEnum;
  wrapUpTime?: number;
};
