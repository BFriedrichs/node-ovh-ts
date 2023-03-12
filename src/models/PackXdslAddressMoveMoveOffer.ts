/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderContract } from './OrderContract';
import { PackXdslMigrationSubServiceToDelete } from './PackXdslMigrationSubServiceToDelete';
import { PackXdslMigrationOfferAvailableOption } from './PackXdslMigrationOfferAvailableOption';
import { PackXdslMigrationOfferModemOption } from './PackXdslMigrationOfferModemOption';
import { PackXdslAddressMovePriceOffer } from './PackXdslAddressMovePriceOffer';

export type PackXdslAddressMoveMoveOffer = {
  contracts: OrderContract[];
  description: string;
  engageMonths: number | null;
  engaged: boolean;
  modemOptions: PackXdslMigrationOfferModemOption[] | null;
  modemReferenceToReturn: string | null;
  needModem: boolean;
  needNewModem: boolean;
  offerName: string;
  options: PackXdslMigrationOfferAvailableOption[];
  prices: PackXdslAddressMovePriceOffer;
  productCodes: string[];
  subServicesToDelete: PackXdslMigrationSubServiceToDelete[];
  url: string;
};
