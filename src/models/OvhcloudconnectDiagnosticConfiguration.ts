/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectDiagnosticFunctionEnum } from './OvhcloudconnectDiagnosticFunctionEnum';
import { OvhcloudconnectDiagnosticTypeEnum } from './OvhcloudconnectDiagnosticTypeEnum';

export type OvhcloudconnectDiagnosticConfiguration = {
  dcConfigId: number;
  diagnosticName?: OvhcloudconnectDiagnosticFunctionEnum;
  diagnosticType: OvhcloudconnectDiagnosticTypeEnum;
  extraConfigId: number;
  popConfigId?: number;
};
