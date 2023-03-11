/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerStorageRaid } from './ServicesExpandedTechnicalBaremetalServerStorageRaid';
import { ServicesExpandedTechnicalBaremetalServerStorageDisk } from './ServicesExpandedTechnicalBaremetalServerStorageDisk';

export type ServicesExpandedTechnicalBaremetalServerStorage = {
  disks: ServicesExpandedTechnicalBaremetalServerStorageDisk;
  hotSwap: boolean;
  raid: string;
  raidDetails: ServicesExpandedTechnicalBaremetalServerStorageRaid | null;
};
