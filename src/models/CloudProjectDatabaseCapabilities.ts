/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseCapabilitiesEngine } from './CloudProjectDatabaseCapabilitiesEngine';
import { CloudProjectDatabaseCapabilitiesOption } from './CloudProjectDatabaseCapabilitiesOption';
import { CloudProjectDatabaseCapabilitiesPlan } from './CloudProjectDatabaseCapabilitiesPlan';
import { CloudProjectDatabaseCapabilitiesFlavor } from './CloudProjectDatabaseCapabilitiesFlavor';

export type CloudProjectDatabaseCapabilities = {
  disks: string[];
  engines: CloudProjectDatabaseCapabilitiesEngine[];
  flavors: CloudProjectDatabaseCapabilitiesFlavor[];
  options: CloudProjectDatabaseCapabilitiesOption[];
  plans: CloudProjectDatabaseCapabilitiesPlan[];
  regions: string[];
};
