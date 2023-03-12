/* WARNING: This file is auto-generated . Do not edit manually. */

import { NutanixPrismcentral } from './NutanixPrismcentral';
import { NutanixNodes } from './NutanixNodes';

export type NutanixCluster = {
  controlPanelURL: string;
  erasureCoding: boolean;
  gatewayCidr: string;
  ipfo: string;
  iplb: string;
  name: string;
  nodes: NutanixNodes[];
  prismCentral: NutanixPrismcentral;
  prismElementVip: string;
  prismSecretId: string;
  rackAwareness: boolean;
  redundancyFactor: number;
  version: string;
  vrack: string;
};
