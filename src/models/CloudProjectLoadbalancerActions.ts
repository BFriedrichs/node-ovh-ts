/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerActionDispatch } from './CloudProjectLoadbalancerActionDispatch';
import { CloudProjectLoadbalancerActionRewrite } from './CloudProjectLoadbalancerActionRewrite';
import { CloudProjectLoadbalancerActionRedirect } from './CloudProjectLoadbalancerActionRedirect';
import { CloudProjectLoadbalancerActionReject } from './CloudProjectLoadbalancerActionReject';

export type CloudProjectLoadbalancerActions = {
  dispatch: CloudProjectLoadbalancerActionDispatch[] | null;
  redirect: CloudProjectLoadbalancerActionRedirect[] | null;
  reject: CloudProjectLoadbalancerActionReject[] | null;
  rewrite: CloudProjectLoadbalancerActionRewrite[] | null;
};
