/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslTemplateModemDHCP } from './XdslTemplateModemDHCP';
import { XdslTemplateModemLAN } from './XdslTemplateModemLAN';
import { XdslTemplateModemPortMapping } from './XdslTemplateModemPortMapping';
import { XdslTemplateModemParametersToIgnore } from './XdslTemplateModemParametersToIgnore';
import { XdslTemplateModemWLAN } from './XdslTemplateModemWLAN';
import { XdslXdslModemConfigMTUSizeEnum } from './XdslXdslModemConfigMTUSizeEnum';

export type XdslTemplateModem = {
  DHCP: XdslTemplateModemDHCP[];
  LAN: XdslTemplateModemLAN[];
  WLAN: XdslTemplateModemWLAN[];
  capabilities: string;
  creationDate: Date;
  dmzIP: string | null;
  mtuSize: XdslXdslModemConfigMTUSizeEnum | null;
  name: string;
  parametersToIgnore: XdslTemplateModemParametersToIgnore | null;
  portMapping: XdslTemplateModemPortMapping[];
};
