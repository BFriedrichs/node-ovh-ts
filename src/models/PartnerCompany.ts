/* WARNING: This file is auto-generated . Do not edit manually. */

import { PartnerOVHCertifications } from './PartnerOVHCertifications';
import { PartnerExternalCertifications } from './PartnerExternalCertifications';
import { PartnerExpertisesChoices } from './PartnerExpertisesChoices';
import { PartnerProductCountries } from './PartnerProductCountries';
import { PartnerActivitySectors } from './PartnerActivitySectors';
import { PartnerClientKinds } from './PartnerClientKinds';
import { PartnerCompanyStatusEnum } from './PartnerCompanyStatusEnum';
import { PartnerOVHProductsUsed } from './PartnerOVHProductsUsed';
import { PartnerPartnerKnowledges } from './PartnerPartnerKnowledges';

export type PartnerCompany = {
  OVHCertifications: PartnerOVHCertifications;
  OVHCustomersAdvised: string;
  OVHKnowledgeResources: string;
  OVHProductsUsed: PartnerOVHProductsUsed;
  OVHTechnicalAdvancedResources: string;
  OVHTechnicalExpertResources: string;
  activitySectors: PartnerActivitySectors;
  address: string;
  city: string;
  clientKinds: PartnerClientKinds;
  commercialName: string;
  country: string;
  description: string;
  email: string;
  employeesNumber: string;
  expertises: PartnerExpertisesChoices;
  externalCertifications: PartnerExternalCertifications;
  facebook: string;
  linkedin: string;
  logo: string;
  name: string;
  partnerKnowledges: PartnerPartnerKnowledges;
  phone: string;
  productCountries: PartnerProductCountries;
  registrationNumber: string;
  revenue: string;
  status: PartnerCompanyStatusEnum;
  twitter: string;
  website: string;
  zipCode: string;
};
