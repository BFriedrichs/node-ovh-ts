/* WARNING: This file is auto-generated . Do not edit manually. */

import { DeskaasUserStateEnum } from './DeskaasUserStateEnum';
import { DeskaasUserActivationStateEnum } from './DeskaasUserActivationStateEnum';

export type DeskaasUser = {
  activationState?: DeskaasUserActivationStateEnum;
  email?: string;
  name?: string;
  state?: DeskaasUserStateEnum;
  userId?: number;
};
