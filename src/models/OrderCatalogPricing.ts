/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type OrderCatalogPricing = {
  capacities: string[];
  commitment: number;
  description: string;
  interval: number;
  intervalUnit: string;
  maximumQuantity: number | null;
  maximumRepeat: number | null;
  minimumQuantity: number;
  minimumRepeat: number;
  mustBeCompleted: boolean;
  price: OrderPrice;
  priceCapInUcents: number | null;
  priceInUcents: number;
  pricingStrategy: string;
};
