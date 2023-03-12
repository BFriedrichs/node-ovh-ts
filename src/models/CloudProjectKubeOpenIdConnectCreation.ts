/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudKubeOpenIdConnectSigningAlgorithmsEnum } from './CloudKubeOpenIdConnectSigningAlgorithmsEnum';

export type CloudProjectKubeOpenIdConnectCreation = {
  caContent?: string | null;
  clientId: string;
  groupsClaim?: string[] | null;
  groupsPrefix?: string | null;
  issuerUrl: string;
  requiredClaim?: string[] | null;
  signingAlgorithms?: CloudKubeOpenIdConnectSigningAlgorithmsEnum[] | null;
  usernameClaim?: string | null;
  usernamePrefix?: string | null;
};
