/* WARNING: This file is auto-generated . Do not edit manually. */

import { Partner2PartnerTypeEnum } from './Partner2PartnerTypeEnum';
import { Partner2EmployeesNumberEnum } from './Partner2EmployeesNumberEnum';
import { NichandleCountryEnum } from './NichandleCountryEnum';

export type Partner2Account = {
  city: string | null;
  companyTurnover: number | null;
  country: NichandleCountryEnum | null;
  name?: string;
  numberOfEmployees: Partner2EmployeesNumberEnum | null;
  partnerType: Partner2PartnerTypeEnum | null;
  yearEstablished: Date | null;
};