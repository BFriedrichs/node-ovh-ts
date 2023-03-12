/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslTemplateModemDHCP } from './XdslTemplateModemDHCP';
import { XdslXdslModemConfigMTUSizeEnum } from './XdslXdslModemConfigMTUSizeEnum';
import { XdslTemplateModemWLAN } from './XdslTemplateModemWLAN';
import { XdslTemplateModemPortMapping } from './XdslTemplateModemPortMapping';
import { XdslTemplateModemLAN } from './XdslTemplateModemLAN';
import { XdslTemplateModemParametersToIgnore } from './XdslTemplateModemParametersToIgnore';

export type XdslTemplateModem = {
  DHCP?: XdslTemplateModemDHCP[];
  LAN?: XdslTemplateModemLAN[];
  WLAN?: XdslTemplateModemWLAN[];
  capabilities?: string;
  creationDate?: Date;
  dmzIP?: string | null;
  mtuSize?: XdslXdslModemConfigMTUSizeEnum | null;
  name?: string;
  parametersToIgnore?: XdslTemplateModemParametersToIgnore | null;
  portMapping?: XdslTemplateModemPortMapping[];
};
