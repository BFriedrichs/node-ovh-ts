/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleLanguageEnum } from './NichandleLanguageEnum';
import { NichandleCurrency } from './NichandleCurrency';
import { NichandleOvhSubsidiaryEnum } from './NichandleOvhSubsidiaryEnum';
import { NichandleLegalFormEnum } from './NichandleLegalFormEnum';
import { NichandleStateEnum } from './NichandleStateEnum';
import { NichandleGenderEnum } from './NichandleGenderEnum';
import { NichandleOvhCompanyEnum } from './NichandleOvhCompanyEnum';
import { NichandleCountryEnum } from './NichandleCountryEnum';

export type NichandleNichandle = {
  address: string | null;
  area: string | null;
  birthCity: string | null;
  birthDay: string | null;
  city: string | null;
  companyNationalIdentificationNumber: string | null;
  corporationType: string | null;
  country: NichandleCountryEnum;
  currency: NichandleCurrency;
  customerCode: string | null;
  email: string;
  fax: string | null;
  firstname: string | null;
  italianSDI: string | null;
  kycValidated: boolean | null;
  language: NichandleLanguageEnum | null;
  legalform: NichandleLegalFormEnum;
  name: string | null;
  nationalIdentificationNumber: string | null;
  nichandle: string;
  organisation: string | null;
  ovhCompany: NichandleOvhCompanyEnum;
  ovhSubsidiary: NichandleOvhSubsidiaryEnum;
  phone: string | null;
  phoneCountry: NichandleCountryEnum | null;
  sex: NichandleGenderEnum | null;
  spareEmail: string | null;
  state: NichandleStateEnum;
  vat: string | null;
  zip: string | null;
};
