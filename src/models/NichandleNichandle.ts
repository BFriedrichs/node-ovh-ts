/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleLanguageEnum } from './NichandleLanguageEnum';
import { NichandleCurrency } from './NichandleCurrency';
import { NichandleCountryEnum } from './NichandleCountryEnum';
import { NichandleLegalFormEnum } from './NichandleLegalFormEnum';
import { NichandleGenderEnum } from './NichandleGenderEnum';
import { NichandleStateEnum } from './NichandleStateEnum';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';
import { NichandleOvhCompanyEnum } from './NichandleOvhCompanyEnum';

export type NichandleNichandle = {
  address?: string | null;
  area?: string | null;
  birthCity?: string | null;
  birthDay?: string | null;
  city?: string | null;
  companyNationalIdentificationNumber?: string | null;
  corporationType?: string | null;
  country?: NichandleCountryEnum;
  currency?: NichandleCurrency;
  customerCode?: string | null;
  email?: string;
  fax?: string | null;
  firstname?: string | null;
  italianSDI?: string | null;
  kycValidated?: boolean | null;
  language?: NichandleLanguageEnum | null;
  legalform?: NichandleLegalFormEnum;
  name?: string | null;
  nationalIdentificationNumber?: string | null;
  nichandle?: string;
  organisation?: string | null;
  ovhCompany?: NichandleOvhCompanyEnum;
  ovhSubsidiary?: NichandleOvhSubsidiaryEnum;
  phone?: string | null;
  phoneCountry?: NichandleCountryEnum | null;
  sex?: NichandleGenderEnum | null;
  spareEmail?: string | null;
  state?: NichandleStateEnum;
  vat?: string | null;
  zip?: string | null;
};
