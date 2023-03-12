/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupAcceptanceStatusEnum } from './StartupAcceptanceStatusEnum';
import { StartupStartupProject } from './StartupStartupProject';
import { StartupStartupCompany } from './StartupStartupCompany';
import { StartupStartupFundRaising } from './StartupStartupFundRaising';
import { StartupAwarnessEnum } from './StartupAwarnessEnum';

export type StartupStartup = {
  acceptanceStatus: StartupAcceptanceStatusEnum | null;
  awarness?: StartupAwarnessEnum;
  company?: StartupStartupCompany;
  eventCode: string | null;
  fundRaising?: StartupStartupFundRaising;
  project?: StartupStartupProject;
};
