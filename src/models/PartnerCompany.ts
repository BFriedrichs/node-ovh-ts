/* WARNING: This file is auto-generated . Do not edit manually. */

import { PartnerOVHCertifications } from './PartnerOVHCertifications';
import { PartnerExternalCertifications } from './PartnerExternalCertifications';
import { PartnerClientKinds } from './PartnerClientKinds';
import { PartnerOVHProductsUsed } from './PartnerOVHProductsUsed';
import { PartnerProductCountries } from './PartnerProductCountries';
import { PartnerPartnerKnowledges } from './PartnerPartnerKnowledges';
import { PartnerExpertisesChoices } from './PartnerExpertisesChoices';
import { PartnerCompanyStatusEnum } from './PartnerCompanyStatusEnum';
import { PartnerActivitySectors } from './PartnerActivitySectors';

export type PartnerCompany = {
  OVHCertifications?: PartnerOVHCertifications;
  OVHCustomersAdvised?: string;
  OVHKnowledgeResources?: string;
  OVHProductsUsed?: PartnerOVHProductsUsed;
  OVHTechnicalAdvancedResources?: string;
  OVHTechnicalExpertResources?: string;
  activitySectors?: PartnerActivitySectors;
  address?: string;
  city?: string;
  clientKinds?: PartnerClientKinds;
  commercialName?: string;
  country?: string;
  description?: string;
  email?: string;
  employeesNumber?: string;
  expertises?: PartnerExpertisesChoices;
  externalCertifications?: PartnerExternalCertifications;
  facebook?: string;
  linkedin?: string;
  logo?: string;
  name?: string;
  partnerKnowledges?: PartnerPartnerKnowledges;
  phone?: string;
  productCountries?: PartnerProductCountries;
  registrationNumber?: string;
  revenue?: string;
  status?: PartnerCompanyStatusEnum;
  twitter?: string;
  website?: string;
  zipCode?: string;
};
