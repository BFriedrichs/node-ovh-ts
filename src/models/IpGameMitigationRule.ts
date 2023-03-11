/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpGameMitigationRuleStateEnum } from './IpGameMitigationRuleStateEnum';
import { IpGameMitigationRuleProtocolEnum } from './IpGameMitigationRuleProtocolEnum';

export type IpGameMitigationRule = {
  id: number;
  ports: number;
  protocol: IpGameMitigationRuleProtocolEnum;
  state: IpGameMitigationRuleStateEnum;
};
