/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicensePleskVersionEnum } from './LicensePleskVersionEnum';
import { LicensePotentialProblemPleskEnum } from './LicensePotentialProblemPleskEnum';
import { LicenseOrderablePleskLanguagePackEnum } from './LicenseOrderablePleskLanguagePackEnum';
import { LicensePleskApplicationSetEnum } from './LicensePleskApplicationSetEnum';
import { LicenseOrderableAntivirusEnum } from './LicenseOrderableAntivirusEnum';
import { LicenseOrderablePleskDomainNumberEnum } from './LicenseOrderablePleskDomainNumberEnum';

export type LicenseOrderablePleskCompatibilityInfos = {
  canHavePowerPack: boolean;
  canHaveResellerManagement: boolean;
  canHaveWordpressToolkit: boolean;
  compliantAntivirus: LicenseOrderableAntivirusEnum;
  compliantApplicationSets: LicensePleskApplicationSetEnum;
  compliantDomains: LicenseOrderablePleskDomainNumberEnum;
  compliantLanguagePack: LicenseOrderablePleskLanguagePackEnum;
  potentialProblems: LicensePotentialProblemPleskEnum;
  version: LicensePleskVersionEnum;
};
