/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnostic } from './XdslLineDiagnostic';
import { XdslAccessDiagnosticCapabilities } from './XdslAccessDiagnosticCapabilities';

export type XdslAccessDiagnostic = {
  capabilities?: XdslAccessDiagnosticCapabilities;
  diagnosticTime?: Date;
  incident?: boolean | null;
  isActiveOnLns?: boolean | null;
  isModemConnected?: boolean | null;
  lineDetails?: XdslLineDiagnostic[] | null;
  maintenance?: boolean | null;
  ping?: boolean | null;
  remaining?: number;
};
