/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerActionDispatch } from './CloudProjectLoadbalancerActionDispatch';
import { CloudProjectLoadbalancerActionRewrite } from './CloudProjectLoadbalancerActionRewrite';
import { CloudProjectLoadbalancerActionReject } from './CloudProjectLoadbalancerActionReject';
import { CloudProjectLoadbalancerActionRedirect } from './CloudProjectLoadbalancerActionRedirect';

export type CloudProjectLoadbalancerActions = {
  dispatch?: CloudProjectLoadbalancerActionDispatch[] | null;
  redirect?: CloudProjectLoadbalancerActionRedirect[] | null;
  reject?: CloudProjectLoadbalancerActionReject[] | null;
  rewrite?: CloudProjectLoadbalancerActionRewrite[] | null;
};
