/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupStartupCompanyIncubator } from './StartupStartupCompanyIncubator';
import { StartupStartupCompanyDetail } from './StartupStartupCompanyDetail';
import { StartupRelatedIndustryEnum } from './StartupRelatedIndustryEnum';
import { StartupStartupCompanySocialNetwork } from './StartupStartupCompanySocialNetwork';
import { StartupEmployeesNumberEnum } from './StartupEmployeesNumberEnum';

export type StartupStartupCompany = {
  detail: StartupStartupCompanyDetail | null;
  employeesNumber?: StartupEmployeesNumberEnum;
  incubator: StartupStartupCompanyIncubator | null;
  name?: string;
  relatedIndustry?: StartupRelatedIndustryEnum;
  socialNetwork: StartupStartupCompanySocialNetwork | null;
  societyWebsite?: string;
};
