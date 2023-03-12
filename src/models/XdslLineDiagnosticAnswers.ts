/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticProblemTypeEnum } from './XdslLineDiagnosticProblemTypeEnum';
import { XdslLineDiagnosticBandwidthTestUnitEnum } from './XdslLineDiagnosticBandwidthTestUnitEnum';

export type XdslLineDiagnosticAnswers = {
  bandwidthTestUnit?: XdslLineDiagnosticBandwidthTestUnitEnum | null;
  comment?: string | null;
  conditionsAccepted?: boolean | null;
  contactPhone?: string | null;
  datetimeOfAppearance?: Date | null;
  downloadBandwidthTest?: number | null;
  endAfternoonHours?: string | null;
  endMorningHours?: string | null;
  followBySms?: boolean | null;
  hasModemKeptSynchronization?: boolean | null;
  idAppointment?: number | null;
  individualSite?: boolean | null;
  modemIsSynchronized?: boolean | null;
  modemMac?: string | null;
  modemStillSynchronized?: boolean | null;
  modemType?: string | null;
  ovhTicket?: string | null;
  problemType?: XdslLineDiagnosticProblemTypeEnum | null;
  resolvedAfterTests?: boolean | null;
  secureSite?: boolean | null;
  severalInternetConnections?: boolean | null;
  siteClosedDays?: string | null;
  siteDigicode?: string | null;
  siteOpening?: string | null;
  startAfternoonHours?: string | null;
  startMorningHours?: string | null;
  uploadBandwidthTest?: number | null;
};
