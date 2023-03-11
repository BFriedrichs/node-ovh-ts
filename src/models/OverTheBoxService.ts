/* WARNING: This file is auto-generated . Do not edit manually. */

import { OverTheBoxTunnelModeEnum } from './OverTheBoxTunnelModeEnum';
import { OverTheBoxServiceStatusEnum } from './OverTheBoxServiceStatusEnum';
import { OverTheBoxServiceConfigurationModeEnum } from './OverTheBoxServiceConfigurationModeEnum';
import { OverTheBoxGraphEndpoint } from './OverTheBoxGraphEndpoint';
import { OverTheBoxAvailableStatusEnum } from './OverTheBoxAvailableStatusEnum';

export type OverTheBoxService = {
  SOCKSProxyEnabled: boolean;
  autoMTU: OverTheBoxAvailableStatusEnum;
  configurationMode: OverTheBoxServiceConfigurationModeEnum;
  customerDescription: string | null;
  graphEndpoint: OverTheBoxGraphEndpoint | null;
  releaseChannel: string;
  serviceName: string;
  status: OverTheBoxServiceStatusEnum;
  tunnelMode: OverTheBoxTunnelModeEnum;
};
