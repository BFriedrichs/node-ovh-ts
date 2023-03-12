/* WARNING: This file is auto-generated . Do not edit manually. */

import { PartnerKnowledgeResourcesRangeEnum } from '../models/PartnerKnowledgeResourcesRangeEnum';
import { PartnerExpertisesChoices } from '../models/PartnerExpertisesChoices';
import { PartnerProductCountries } from '../models/PartnerProductCountries';
import { PartnerContact } from '../models/PartnerContact';
import { PartnerActivitySectors } from '../models/PartnerActivitySectors';
import { PartnerTechnicalExpertResourcesRangeEnum } from '../models/PartnerTechnicalExpertResourcesRangeEnum';
import { PartnerApplication } from '../models/PartnerApplication';
import { PartnerCompany } from '../models/PartnerCompany';
import { PartnerNic } from '../models/PartnerNic';
import { PartnerEmployeesNumberEnum } from '../models/PartnerEmployeesNumberEnum';
import { PartnerClientKinds } from '../models/PartnerClientKinds';
import { PartnerOVHProductsUsed } from '../models/PartnerOVHProductsUsed';
import { PartnerOVHCustomersAdvisedEnum } from '../models/PartnerOVHCustomersAdvisedEnum';
import { NichandleCountryEnum } from '../models/NichandleCountryEnum';
import { PartnerRevenueRangeEnum } from '../models/PartnerRevenueRangeEnum';
import { PartnerOVHCertifications } from '../models/PartnerOVHCertifications';
import { PartnerExternalCertifications } from '../models/PartnerExternalCertifications';
import { PartnerTechnicalAdvancedResourcesRangeEnum } from '../models/PartnerTechnicalAdvancedResourcesRangeEnum';
import { PartnerPartnerKnowledges } from '../models/PartnerPartnerKnowledges';
import OVHBase from '../ovh';

class PartnersHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** List created companies */
  listRegisterCompanys = (): Promise<string[]> => {
    return this.ovh.request('GET', '/partners/register/company');
  };

  /** Created a new company for the inscription */
  createRegisterCompany = (body: {
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
  deleteRegisterCompanyByCompanyId = (companyId: string): Promise<string> => {
    return this.ovh.request('DELETE', `/partners/register/company/${companyId}`);
  };

  /** Get information on a created company */
  getRegisterCompanyByCompanyId = (companyId: string): Promise<PartnerCompany> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}`);
  };

  /** Update some fields on a created company */
  updateRegisterCompanyByCompanyId = (
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
  getRegisterCompanyApplicationByCompanyId = (companyId: string): Promise<PartnerApplication> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/application`);
  };

  /** Submit application information for validation */
  postRegisterCompanyApplicationByCompanyId = (
    companyId: string,
    body: { termsAndConditionsOfServiceAccepted: boolean }
  ): Promise<PartnerApplication> => {
    return this.ovh.request('POST', `/partners/register/company/${companyId}/application`, body);
  };

  /** List created contacts */
  listRegisterCompanyContactsByCompanyId = (companyId: string): Promise<string[]> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/contact`);
  };

  /** Created a new contact for the inscription */
  createRegisterCompanyContactByCompanyId = (
    companyId: string,
    body: {
      email: string;
      facebook?: string;
      firstName: string;
      lastName: string;
      linkedin?: string;
      newsletter?: boolean;
      otherNics?: PartnerNic[];
      phone: string;
      role: string;
      twitter?: string;
    }
  ): Promise<PartnerContact> => {
    return this.ovh.request('POST', `/partners/register/company/${companyId}/contact`, body);
  };

  /** Remove a contact */
  deleteRegisterCompanyContactByCompanyIdAndContactId = (
    companyId: string,
    contactId: string
  ): Promise<string> => {
    return this.ovh.request(
      'DELETE',
      `/partners/register/company/${companyId}/contact/${contactId}`
    );
  };

  /** Get information on a created contact */
  getRegisterCompanyContactByCompanyIdAndContactId = (
    companyId: string,
    contactId: string
  ): Promise<PartnerContact> => {
    return this.ovh.request('GET', `/partners/register/company/${companyId}/contact/${contactId}`);
  };

  /** Update some fields on a created contact */
  updateRegisterCompanyContactByCompanyIdAndContactId = (
    companyId: string,
    contactId: string,
    body: {
      email?: string;
      facebook?: string;
      firstName?: string;
      lastName?: string;
      linkedin?: string;
      newsletter?: boolean;
      otherNics?: PartnerNic[];
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

export { PartnersHandler };
