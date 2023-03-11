/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccHypervisor } from './OrderCatalogPccHypervisor';
import { NichandleCountryEnum } from './NichandleCountryEnum';
import { OrderCatalogPccManagementFees } from './OrderCatalogPccManagementFees';

export type OrderCatalogPccDatacenter = {
  cityCode: string;
  cityName: string | null;
  countryCode: NichandleCountryEnum;
  defaultHypervisor: string;
  hypervisors: OrderCatalogPccHypervisor;
  mainPlan: string;
  managementFees: OrderCatalogPccManagementFees | null;
  orderable: boolean;
  orderableOptions: boolean;
  orderableResources: boolean;
  storagesNoPack: string;
  zoneFullName: string;
  zoneName: string;
};
