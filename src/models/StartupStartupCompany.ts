/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupEmployeesNumberEnum } from './StartupEmployeesNumberEnum';
import { StartupRelatedIndustryEnum } from './StartupRelatedIndustryEnum';
import { StartupStartupCompanySocialNetwork } from './StartupStartupCompanySocialNetwork';
import { StartupStartupCompanyDetail } from './StartupStartupCompanyDetail';
import { StartupStartupCompanyIncubator } from './StartupStartupCompanyIncubator';

export type StartupStartupCompany = {
  detail: StartupStartupCompanyDetail | null;
  employeesNumber?: StartupEmployeesNumberEnum;
  incubator: StartupStartupCompanyIncubator | null;
  name?: string;
  relatedIndustry?: StartupRelatedIndustryEnum;
  socialNetwork: StartupStartupCompanySocialNetwork | null;
  societyWebsite?: string;
};
