/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslXdslModemConfigEasyFirewallLevelEnum } from './XdslXdslModemConfigEasyFirewallLevelEnum';
import { XdslXdslModemConfigMTUSizeEnum } from './XdslXdslModemConfigMTUSizeEnum';
import { XdslModemCapabilities } from './XdslModemCapabilities';
import { XdslXdslModemConfigACSBackendEnum } from './XdslXdslModemConfigACSBackendEnum';

export type XdslModem = {
  acsBackend: XdslXdslModemConfigACSBackendEnum;
  acsVersion: string | null;
  brandName: string;
  capabilities: XdslModemCapabilities;
  dmzIP: string | null;
  easyFirewallLevel: XdslXdslModemConfigEasyFirewallLevelEnum | null;
  ipv6Support: boolean;
  isBridged: boolean;
  lastCwmpRequestDate: Date | null;
  macAddress: string;
  managedByOvh: boolean;
  model: string;
  mtuSize: XdslXdslModemConfigMTUSizeEnum | null;
  serialNumber: string;
};
