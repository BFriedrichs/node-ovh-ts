/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectDiagnosticTypeEnum } from './OvhcloudconnectDiagnosticTypeEnum';
import { OvhcloudconnectDiagnosticFunctionEnum } from './OvhcloudconnectDiagnosticFunctionEnum';

export type OvhcloudconnectDiagnosticConfiguration = {
  dcConfigId?: number;
  diagnosticName: OvhcloudconnectDiagnosticFunctionEnum;
  diagnosticType?: OvhcloudconnectDiagnosticTypeEnum;
  extraConfigId?: number;
  popConfigId: number;
};
