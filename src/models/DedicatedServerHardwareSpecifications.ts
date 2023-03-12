/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerCpuFamilyEnum } from './DedicatedServerCpuFamilyEnum';
import { DedicatedServerHardwareSpecificationsExpansionCard } from './DedicatedServerHardwareSpecificationsExpansionCard';
import { DedicatedServerHardwareSpecificationsDisk } from './DedicatedServerHardwareSpecificationsDisk';
import { DedicatedServerBootModeEnum } from './DedicatedServerBootModeEnum';
import { DedicatedServerHardwareSpecificationsRaidHardEnum } from './DedicatedServerHardwareSpecificationsRaidHardEnum';
import { DedicatedServerFormFactorEnum } from './DedicatedServerFormFactorEnum';

export type DedicatedServerHardwareSpecifications = {
  bootMode?: DedicatedServerBootModeEnum;
  coresPerProcessor?: number | null;
  defaultHardwareRaidSize?: number | null;
  defaultHardwareRaidType?: DedicatedServerHardwareSpecificationsRaidHardEnum | null;
  description?: string | null;
  diskGroups?: DedicatedServerHardwareSpecificationsDisk[] | null;
  expansionCards?: DedicatedServerHardwareSpecificationsExpansionCard[] | null;
  formFactor?: DedicatedServerFormFactorEnum | null;
  memorySize?: number | null;
  motherboard?: string | null;
  numberOfProcessors?: number | null;
  processorArchitecture?: DedicatedServerCpuFamilyEnum | null;
  processorName?: string | null;
  threadsPerProcessor?: number | null;
  usbKeys?: number | null;
};
