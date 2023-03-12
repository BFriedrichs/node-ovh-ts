/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesExpandedTechnicalBaremetalServerStorageDisk } from './ServicesExpandedTechnicalBaremetalServerStorageDisk';
import { ServicesExpandedTechnicalBaremetalServerStorageRaid } from './ServicesExpandedTechnicalBaremetalServerStorageRaid';

export type ServicesExpandedTechnicalBaremetalServerStorage = {
  disks?: ServicesExpandedTechnicalBaremetalServerStorageDisk[];
  hotSwap?: boolean;
  raid?: string;
  raidDetails?: ServicesExpandedTechnicalBaremetalServerStorageRaid | null;
};
