/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPrivateCloudZonesListing } from './OrderCatalogPrivateCloudZonesListing';
import { OrderCatalogPrivateCloudCapabilitiesListing } from './OrderCatalogPrivateCloudCapabilitiesListing';

export type OrderCatalogPrivateCloudCatalog = {
  catalogId?: number;
  catalogName?: string;
  defaultHypervisor?: string;
  defaultZone?: string;
  merchantCode?: string;
  options?: OrderCatalogPrivateCloudCapabilitiesListing;
  zones?: OrderCatalogPrivateCloudZonesListing;
};
