/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticDiagnosticStatusEnum } from './XdslLineDiagnosticDiagnosticStatusEnum';
import { XdslLineDiagnosticDiagnosticData } from './XdslLineDiagnosticDiagnosticData';
import { XdslLineDiagnosticFaultTypeEnum } from './XdslLineDiagnosticFaultTypeEnum';

export type XdslLineDiagnosticDiagnostic = {
  data?: XdslLineDiagnosticDiagnosticData;
  faultType?: XdslLineDiagnosticFaultTypeEnum;
  id?: number;
  status?: XdslLineDiagnosticDiagnosticStatusEnum;
};
