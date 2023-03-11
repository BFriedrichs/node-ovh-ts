/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyDiagnosticReportCategoryEnum } from './TelephonyDiagnosticReportCategoryEnum';
import { TelephonyDiagnosticReportLevelEnum } from './TelephonyDiagnosticReportLevelEnum';

export type TelephonyDiagnosticReport = {
  callId: string;
  category: TelephonyDiagnosticReportCategoryEnum;
  datetime: Date;
  description: string;
  level: TelephonyDiagnosticReportLevelEnum;
  name: string;
  report: string;
};
