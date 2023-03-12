/* WARNING: This file is auto-generated . Do not edit manually. */

import { PackXdslMigrationOfferAvailableOption } from './PackXdslMigrationOfferAvailableOption';
import { OrderContract } from './OrderContract';
import { PackXdslAddressMovePriceOffer } from './PackXdslAddressMovePriceOffer';
import { PackXdslMigrationSubServiceToDelete } from './PackXdslMigrationSubServiceToDelete';
import { PackXdslMigrationOfferModemOption } from './PackXdslMigrationOfferModemOption';

export type PackXdslAddressMoveMoveOffer = {
  contracts?: OrderContract[];
  description?: string;
  engageMonths?: number | null;
  engaged?: boolean;
  modemOptions?: PackXdslMigrationOfferModemOption[] | null;
  modemReferenceToReturn?: string | null;
  needModem?: boolean;
  needNewModem?: boolean;
  offerName?: string;
  options?: PackXdslMigrationOfferAvailableOption[];
  prices?: PackXdslAddressMovePriceOffer;
  productCodes?: string[];
  subServicesToDelete?: PackXdslMigrationSubServiceToDelete[];
  url?: string;
};
