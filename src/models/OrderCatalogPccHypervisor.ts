/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCatalogPccHost } from './OrderCatalogPccHost';
import { OrderCatalogPccStorage } from './OrderCatalogPccStorage';
import { OrderCatalogPccServicePack } from './OrderCatalogPccServicePack';
import { OrderCatalogPccOption } from './OrderCatalogPccOption';

export type OrderCatalogPccHypervisor = {
  hosts: OrderCatalogPccHost;
  name: string;
  options: OrderCatalogPccOption;
  orderable: boolean;
  servicePacks: OrderCatalogPccServicePack;
  shortName: string;
  storages: OrderCatalogPccStorage;
  type: string;
};
