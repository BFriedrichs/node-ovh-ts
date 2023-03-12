/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslTemplateModemSecurityTypeEnum } from './XdslTemplateModemSecurityTypeEnum';
import { XdslXdslModemConfigChannelModeEnum } from './XdslXdslModemConfigChannelModeEnum';
import { XdslXdslModemConfigFrequencyEnum } from './XdslXdslModemConfigFrequencyEnum';

export type XdslTemplateModemWLAN = {
  SSID: string;
  SSIDAdvertisementEnabled: boolean;
  bandSteering: boolean;
  channel: number;
  channelMode: XdslXdslModemConfigChannelModeEnum;
  enabled: boolean;
  frequency: XdslXdslModemConfigFrequencyEnum;
  guest: boolean;
  securityKey: string;
  securityType: XdslTemplateModemSecurityTypeEnum;
  wifiName: string;
};
