/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleLanguageEnum } from './NichandleLanguageEnum';
import { NichandleGenderEnum } from './NichandleGenderEnum';
import { NichandleLegalFormEnum } from './NichandleLegalFormEnum';
import { ContactAddress } from './ContactAddress';
import { NichandleCountryEnum } from './NichandleCountryEnum';

export type ContactContact = {
  address: ContactAddress;
  birthCity: string | null;
  birthCountry: NichandleCountryEnum | null;
  birthDay: Date | null;
  birthZip: string | null;
  cellPhone: string | null;
  companyNationalIdentificationNumber: string | null;
  email: string;
  fax: string | null;
  firstName: string;
  gender: NichandleGenderEnum | null;
  id: number;
  language: NichandleLanguageEnum;
  lastName: string;
  legalForm: NichandleLegalFormEnum;
  nationalIdentificationNumber: string | null;
  nationality: NichandleCountryEnum | null;
  organisationName: string | null;
  organisationType: string | null;
  phone: string | null;
  spareEmail: string | null;
  vat: string | null;
};
