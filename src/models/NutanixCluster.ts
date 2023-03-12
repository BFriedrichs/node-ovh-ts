/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixNodes } from './NutanixNodes';
import { NutanixPrismcentral } from './NutanixPrismcentral';

export type NutanixCluster = {
  controlPanelURL?: string;
  erasureCoding?: boolean;
  gatewayCidr?: string;
  ipfo?: string;
  iplb?: string;
  name?: string;
  nodes?: NutanixNodes[];
  prismCentral?: NutanixPrismcentral;
  prismElementVip?: string;
  prismSecretId?: string;
  rackAwareness?: boolean;
  redundancyFactor?: number;
  version?: string;
  vrack?: string;
};
