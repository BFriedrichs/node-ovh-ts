/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeIncidentProposedOfferConfiguration } from './MeIncidentProposedOfferConfiguration';
import { MeIncidentPercentagePromotion } from './MeIncidentPercentagePromotion';
import { OrderCartGenericProductDefinition } from './OrderCartGenericProductDefinition';

export type MeIncidentProposedOffer = {
  configurations: MeIncidentProposedOfferConfiguration;
  plan: OrderCartGenericProductDefinition;
  pricingMode: string;
  promotion: MeIncidentPercentagePromotion;
};
