/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicensePleskApplicationSetEnum } from './LicensePleskApplicationSetEnum';
import { LicensePotentialProblemPleskEnum } from './LicensePotentialProblemPleskEnum';
import { LicenseOrderablePleskDomainNumberEnum } from './LicenseOrderablePleskDomainNumberEnum';
import { LicensePleskVersionEnum } from './LicensePleskVersionEnum';
import { LicenseOrderableAntivirusEnum } from './LicenseOrderableAntivirusEnum';
import { LicenseOrderablePleskLanguagePackEnum } from './LicenseOrderablePleskLanguagePackEnum';

export type LicenseOrderablePleskCompatibilityInfos = {
  canHavePowerPack?: boolean;
  canHaveResellerManagement?: boolean;
  canHaveWordpressToolkit?: boolean;
  compliantAntivirus?: LicenseOrderableAntivirusEnum[];
  compliantApplicationSets?: LicensePleskApplicationSetEnum[];
  compliantDomains?: LicenseOrderablePleskDomainNumberEnum[];
  compliantLanguagePack?: LicenseOrderablePleskLanguagePackEnum[];
  potentialProblems?: LicensePotentialProblemPleskEnum[];
  version?: LicensePleskVersionEnum;
};
