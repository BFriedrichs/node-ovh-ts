/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupRelatedIndustryEnum } from './StartupRelatedIndustryEnum';
import { StartupStartupCompanyIncubator } from './StartupStartupCompanyIncubator';
import { StartupStartupCompanyDetail } from './StartupStartupCompanyDetail';
import { StartupEmployeesNumberEnum } from './StartupEmployeesNumberEnum';
import { StartupStartupCompanySocialNetwork } from './StartupStartupCompanySocialNetwork';

export type StartupStartupCompany = {
  detail?: StartupStartupCompanyDetail | null;
  employeesNumber: StartupEmployeesNumberEnum;
  incubator?: StartupStartupCompanyIncubator | null;
  name: string;
  relatedIndustry: StartupRelatedIndustryEnum;
  socialNetwork?: StartupStartupCompanySocialNetwork | null;
  societyWebsite: string;
};
