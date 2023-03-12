/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderCartGenericProductDefinition } from './OrderCartGenericProductDefinition';
import { MeIncidentProposedOfferConfiguration } from './MeIncidentProposedOfferConfiguration';
import { MeIncidentPercentagePromotion } from './MeIncidentPercentagePromotion';

export type MeIncidentProposedOffer = {
  configurations?: MeIncidentProposedOfferConfiguration[];
  plan?: OrderCartGenericProductDefinition;
  pricingMode?: string;
  promotion?: MeIncidentPercentagePromotion;
};
