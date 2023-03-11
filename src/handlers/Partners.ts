/* WARNING: This file is auto-generated . Do not edit manually. */

import { PartnerExpertisesChoices } from '../models/PartnerExpertisesChoices';
import { PartnerClientKinds } from '../models/PartnerClientKinds';
import { PartnerNic } from '../models/PartnerNic';
import { PartnerApplication } from '../models/PartnerApplication';
import { PartnerActivitySectors } from '../models/PartnerActivitySectors';
import { PartnerKnowledgeResourcesRangeEnum } from '../models/PartnerKnowledgeResourcesRangeEnum';
import { PartnerPartnerKnowledges } from '../models/PartnerPartnerKnowledges';
import { PartnerOVHProductsUsed } from '../models/PartnerOVHProductsUsed';
import { NichandleCountryEnum } from '../models/NichandleCountryEnum';
import { PartnerExternalCertifications } from '../models/PartnerExternalCertifications';
import { PartnerTechnicalAdvancedResourcesRangeEnum } from '../models/PartnerTechnicalAdvancedResourcesRangeEnum';
import { PartnerRevenueRangeEnum } from '../models/PartnerRevenueRangeEnum';
import { PartnerOVHCustomersAdvisedEnum } from '../models/PartnerOVHCustomersAdvisedEnum';
import { PartnerCompany } from '../models/PartnerCompany';
import { PartnerProductCountries } from '../models/PartnerProductCountries';
import { PartnerTechnicalExpertResourcesRangeEnum } from '../models/PartnerTechnicalExpertResourcesRangeEnum';
import { PartnerContact } from '../models/PartnerContact';
import { PartnerEmployeesNumberEnum } from '../models/PartnerEmployeesNumberEnum';
import { PartnerOVHCertifications } from '../models/PartnerOVHCertifications';
import OVHBase from '../ovh';

class PartnersHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List created companies */
  getRegisterCompany = (): Promise<string> => {
    return this.ovh.request('GET', '/partners/register/company');
  };

  /** Created a new company for the inscription */
  postRegisterCompany = (body: {
    OVHCertifications?: PartnerOVHCertifications;
    OVHCustomersAdvised: PartnerOVHCustomersAdvisedEnum;
    OVHKnowledgeResources: PartnerKnowledgeResourcesRangeEnum;
    OVHProductsUsed?: PartnerOVHProductsUsed;
    OVHTechnicalAdvancedResources: PartnerTechnicalAdvancedResourcesRangeEnum;
    OVHTechnicalExpertResources: PartnerTechnicalExpertResourcesRangeEnum;
    activitySectors?: PartnerActivitySectors;
    address: string;
    city: string;
    clientKinds?: PartnerClientKinds;
    commercialName: string;
    country: NichandleCountryEnum;
    description: string;
    email: string;
    employeesNumber: PartnerEmployeesNumberEnum;
    expertises?: PartnerExpertisesChoices;
    externalCertifications?: PartnerExternalCertifications;
    facebook?: string;
    linkedin?: string;
    logo: string;
    name: string;
    partnerKnowledges?: PartnerPartnerKnowledges;
    phone: string;
    productCountries?: PartnerProductCountries;
    registrationNumber?: string;
    revenue: PartnerRevenueRangeEnum;
    twitter?: string;
    website: string;
    zipCode: string;
  }): Promise<PartnerCompany> => {
    return this.ovh.request('POST', '/partners/register/company', body);
  };

  /** Remove a company */
  deleteRegisterCompanyCompanyId = (companyId: string): Promise<string> => {
    return this.ovh.request('DELETE', `/partners/register/company/${companyId}`);
  };

  /** Get information on a created company */
  getRegisterCompanyCompanyId = (companyId: string): Promise<PartnerCompany> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}`);
  };

  /** Update some fields on a created company */
  putRegisterCompanyCompanyId = (
    companyId: string,
    body: {
      OVHCertifications?: PartnerOVHCertifications;
      OVHCustomersAdvised?: PartnerOVHCustomersAdvisedEnum;
      OVHKnowledgeResources?: PartnerKnowledgeResourcesRangeEnum;
      OVHProductsUsed?: PartnerOVHProductsUsed;
      OVHTechnicalAdvancedResources?: PartnerTechnicalAdvancedResourcesRangeEnum;
      OVHTechnicalExpertResources?: PartnerTechnicalExpertResourcesRangeEnum;
      activitySectors?: PartnerActivitySectors;
      address?: string;
      city?: string;
      clientKinds?: PartnerClientKinds;
      commercialName?: string;
      country?: NichandleCountryEnum;
      description?: string;
      effective?: PartnerEmployeesNumberEnum;
      email?: string;
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
      revenue?: PartnerRevenueRangeEnum;
      twitter?: string;
      website?: string;
      zipCode?: string;
    }
  ): Promise<PartnerCompany> => {
    return this.ovh.request('PUT', `/partners/register/company/${companyId}`, body);
  };

  /** Compute scoring score without submitting application */
  getRegisterCompanyCompanyIdApplication = (companyId: string): Promise<PartnerApplication> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/application`);
  };

  /** Submit application information for validation */
  postRegisterCompanyCompanyIdApplication = (
    companyId: string,
    body: { termsAndConditionsOfServiceAccepted: boolean }
  ): Promise<PartnerApplication> => {
    return this.ovh.request('POST', `/partners/register/company/${companyId}/application`, body);
  };

  /** List created contacts */
  getRegisterCompanyCompanyIdContact = (companyId: string): Promise<string> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/contact`);
  };

  /** Created a new contact for the inscription */
  postRegisterCompanyCompanyIdContact = (
    companyId: string,
    body: {
      email: string;
      facebook?: string;
      firstName: string;
      lastName: string;
      linkedin?: string;
      newsletter?: boolean;
      otherNics?: PartnerNic;
      phone: string;
      role: string;
      twitter?: string;
    }
  ): Promise<PartnerContact> => {
    return this.ovh.request('POST', `/partners/register/company/${companyId}/contact`, body);
  };

  /** Remove a contact */
  deleteRegisterCompanyCompanyIdContactContactId = (
    companyId: string,
    contactId: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/partners/register/company/${companyId}/contact/${contactId}`
    );
  };

  /** Get information on a created contact */
  getRegisterCompanyCompanyIdContactContactId = (
    companyId: string,
    contactId: string
  ): Promise<PartnerContact> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/contact/${contactId}`);
  };

  /** Update some fields on a created contact */
  putRegisterCompanyCompanyIdContactContactId = (
    companyId: string,
    contactId: string,
    body: {
      email?: string;
      facebook?: string;
      firstName?: string;
      lastName?: string;
      linkedin?: string;
      newsletter?: boolean;
      otherNics?: PartnerNic;
      phone?: string;
      role?: string;
      twitter?: string;
    }
  ): Promise<PartnerContact> => {
    return this.ovh.request(
      'PUT',
      `/partners/register/company/${companyId}/contact/${contactId}`,
      body
    );
  };
}

export default PartnersHandler;
