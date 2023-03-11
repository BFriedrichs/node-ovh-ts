/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleCreationRulesActionEnum } from '../models/NichandleCreationRulesActionEnum';
import { NichandleLanguageEnum } from '../models/NichandleLanguageEnum';
import { NichandleCreationRules } from '../models/NichandleCreationRules';
import { OrderContract } from '../models/OrderContract';
import { NichandleNewAccountAndToken } from '../models/NichandleNewAccountAndToken';
import { NichandleOvhSubsidiaryEnum } from '../models/NichandleOvhSubsidiaryEnum';
import { NichandleCreationRule } from '../models/NichandleCreationRule';
import { NichandleLegalFormEnum } from '../models/NichandleLegalFormEnum';
import { NichandleGenderEnum } from '../models/NichandleGenderEnum';
import { NichandleOvhCompanyEnum } from '../models/NichandleOvhCompanyEnum';
import { NichandleCountryEnum } from '../models/NichandleCountryEnum';
import OVHBase from '../ovh';

class NewAccountHandler {
  ovh: OVHBase;

  constructor(ovh: OVHBase) {
    this.ovh = ovh;
  }

  /** Create a new OVH identifier */
  post = (body: {
    address?: string;
    area?: string;
    birthCity?: string;
    birthDay?: string;
    city?: string;
    companyNationalIdentificationNumber?: string;
    corporationType?: string;
    country: NichandleCountryEnum;
    email: string;
    fax?: string;
    firstname?: string;
    italianSDI?: string;
    language?: NichandleLanguageEnum;
    legalform: NichandleLegalFormEnum;
    name?: string;
    nationalIdentificationNumber?: string;
    organisation?: string;
    ovhCompany: NichandleOvhCompanyEnum;
    ovhSubsidiary: NichandleOvhSubsidiaryEnum;
    phone?: string;
    phoneCountry?: NichandleCountryEnum;
    sex?: NichandleGenderEnum;
    spareEmail?: string;
    vat?: string;
    zip?: string;
  }): Promise<NichandleNewAccountAndToken> => {
    return this.ovh.request('POST', '/newAccount', body);
  };

  /** All available areas for a given country */
  getArea = (): Promise<string> => {
    return this.ovh.request('GET', '/newAccount/area');
  };

  /** Returns the contracts that governs the creation of an OVH identifier */
  getContracts = (): Promise<OrderContract> => {
    return this.ovh.request('GET', '/newAccount/contracts');
  };

  /** All available corporation types for a given country */
  getCorporationType = (): Promise<string> => {
    return this.ovh.request('GET', '/newAccount/corporationType');
  };

  /** All available countries for an ovh company and an ovh subsidiary */
  getCountries = (): Promise<NichandleCountryEnum> => {
    return this.ovh.request('GET', '/newAccount/countries');
  };

  /** Give all the rules to follow in order to create an OVH identifier */
  getCreationRules = (): Promise<NichandleCreationRules> => {
    return this.ovh.request('GET', '/newAccount/creationRules');
  };

  /** All available legal forms for a given country */
  getLegalform = (): Promise<string> => {
    return this.ovh.request('GET', '/newAccount/legalform');
  };

  /** Give all the rules to follow in order to create and update an OVH identifier */
  postRules = (body: {
    action?: NichandleCreationRulesActionEnum;
    address?: string;
    area?: string;
    birthCity?: string;
    birthDay?: string;
    city?: string;
    companyNationalIdentificationNumber?: string;
    corporationType?: string;
    country?: NichandleCountryEnum;
    email?: string;
    fax?: string;
    firstname?: string;
    italianSDI?: string;
    language?: NichandleLanguageEnum;
    legalform?: NichandleLegalFormEnum;
    name?: string;
    nationalIdentificationNumber?: string;
    organisation?: string;
    ovhCompany?: NichandleOvhCompanyEnum;
    ovhSubsidiary?: NichandleOvhSubsidiaryEnum;
    phone?: string;
    phoneCountry?: NichandleCountryEnum;
    sex?: NichandleGenderEnum;
    spareEmail?: string;
    vat?: string;
    zip?: string;
  }): Promise<NichandleCreationRule> => {
    return this.ovh.request('POST', '/newAccount/rules', body);
  };
}

export default NewAccountHandler;
