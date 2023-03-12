/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPrivateCloudCapabilitiesListing } from './OrderCatalogPrivateCloudCapabilitiesListing';
import { OrderCatalogPrivateCloudZonesListing } from './OrderCatalogPrivateCloudZonesListing';

export type OrderCatalogPrivateCloudCatalog = {
  catalogId: number;
  catalogName: string;
  defaultHypervisor: string;
  defaultZone: string;
  merchantCode: string;
  options: OrderCatalogPrivateCloudCapabilitiesListing;
  zones: OrderCatalogPrivateCloudZonesListing;
};
