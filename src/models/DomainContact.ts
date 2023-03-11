/* WARNING: This file is auto-generated . Do not edit manually. */

import { NichandleLanguageEnum } from './NichandleLanguageEnum';
import { DomainContactAddress } from './DomainContactAddress';
import { NichandleLegalFormEnum } from './NichandleLegalFormEnum';
import { NichandleGenderEnum } from './NichandleGenderEnum';
import { NichandleCountryEnum } from './NichandleCountryEnum';

export type DomainContact = {
  accreditationCountry: NichandleCountryEnum | null;
  accreditationId: string | null;
  accreditationOrganism: string | null;
  accreditationYear: number | null;
  address: DomainContactAddress | null;
  birthCity: string | null;
  birthCountry: NichandleCountryEnum | null;
  birthDay: Date | null;
  birthZip: string | null;
  cellPhone: string | null;
  companyNationalIdentificationNumber: string | null;
  email: string | null;
  enterpriseId: string | null;
  fax: string | null;
  firstName: string | null;
  gender: NichandleGenderEnum | null;
  id: number;
  insee: string | null;
  language: NichandleLanguageEnum | null;
  lastName: string | null;
  legalForm: NichandleLegalFormEnum | null;
  legalFormCategory: string | null;
  nationalIdentificationNumber: string | null;
  nationality: NichandleCountryEnum | null;
  organisationAccountable: string | null;
  organisationFunding: string | null;
  organisationFundingOther: string | null;
  organisationName: string | null;
  organisationRole: string | null;
  organisationRoleOther: string | null;
  organisationStaffStatus: string | null;
  organisationStaffStatusOther: string | null;
  organisationType: string | null;
  organisationTypeOther: string | null;
  phone: string | null;
  registrantDocumentType: string | null;
  registrantDocumentTypeOther: string | null;
  roleInOrganisation: string | null;
  vat: string | null;
  website: string | null;
};
