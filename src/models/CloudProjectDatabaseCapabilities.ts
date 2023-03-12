/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseCapabilitiesEngine } from './CloudProjectDatabaseCapabilitiesEngine';
import { CloudProjectDatabaseCapabilitiesFlavor } from './CloudProjectDatabaseCapabilitiesFlavor';
import { CloudProjectDatabaseCapabilitiesOption } from './CloudProjectDatabaseCapabilitiesOption';
import { CloudProjectDatabaseCapabilitiesPlan } from './CloudProjectDatabaseCapabilitiesPlan';

export type CloudProjectDatabaseCapabilities = {
  disks?: string[];
  engines?: CloudProjectDatabaseCapabilitiesEngine[];
  flavors?: CloudProjectDatabaseCapabilitiesFlavor[];
  options?: CloudProjectDatabaseCapabilitiesOption[];
  plans?: CloudProjectDatabaseCapabilitiesPlan[];
  regions?: string[];
};
