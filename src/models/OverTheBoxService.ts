/* WARNING: This file is auto-generated . Do not edit manually. */

import { OverTheBoxServiceStatusEnum } from './OverTheBoxServiceStatusEnum';
import { OverTheBoxTunnelModeEnum } from './OverTheBoxTunnelModeEnum';
import { OverTheBoxAvailableStatusEnum } from './OverTheBoxAvailableStatusEnum';
import { OverTheBoxGraphEndpoint } from './OverTheBoxGraphEndpoint';
import { OverTheBoxServiceConfigurationModeEnum } from './OverTheBoxServiceConfigurationModeEnum';

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
