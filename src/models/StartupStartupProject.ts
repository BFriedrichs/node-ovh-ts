/* WARNING: This file is auto-generated . Do not edit manually. */

import { StartupStartupProjectTechnicalNeed } from './StartupStartupProjectTechnicalNeed';
import { StartupRelatedTechnologyEnum } from './StartupRelatedTechnologyEnum';

export type StartupStartupProject = {
  businessModel: string;
  description: string;
  developmentStage: string;
  productName: string;
  relatedTechnology: StartupRelatedTechnologyEnum[];
  requirements: StartupStartupProjectTechnicalNeed;
};
