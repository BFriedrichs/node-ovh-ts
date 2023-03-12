/* WARNING: This file is auto-generated . Do not edit manually. */

import { PackXdslMigrationAndAddressMovePromotion } from './PackXdslMigrationAndAddressMovePromotion';
import { PackXdslMigrationOfferAvailableOption } from './PackXdslMigrationOfferAvailableOption';
import { OrderContract } from './OrderContract';
import { OrderPrice } from './OrderPrice';
import { PackXdslMigrationSubServiceToDelete } from './PackXdslMigrationSubServiceToDelete';
import { PackXdslMigrationOfferModemOption } from './PackXdslMigrationOfferModemOption';

export type PackXdslMigrationMigrationOffer = {
  contractList?: string[];
  contracts?: OrderContract[];
  currentOfferPrice?: OrderPrice;
  description?: string;
  due?: OrderPrice | null;
  engageMonths?: number | null;
  engaged?: boolean;
  engagementMonths?: number[];
  firstYearPromo?: OrderPrice | null;
  gtrComfortFees?: OrderPrice | null;
  installFees?: OrderPrice | null;
  modemMacToReturn?: string | null;
  modemOptions?: PackXdslMigrationOfferModemOption[] | null;
  modemRental?: OrderPrice | null;
  needModem?: boolean;
  needNewModem?: boolean;
  offerName?: string;
  options?: PackXdslMigrationOfferAvailableOption[];
  price?: OrderPrice;
  promotion?: PackXdslMigrationAndAddressMovePromotion | null;
  providerAI?: OrderPrice | null;
  providerOrange?: OrderPrice | null;
  subServicesToDelete?: PackXdslMigrationSubServiceToDelete[];
  url?: string;
};
