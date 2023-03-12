/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectTaskStatusEnum } from './OvhcloudconnectTaskStatusEnum';
import { OvhcloudconnectDiagnosticResult } from './OvhcloudconnectDiagnosticResult';
import { OvhcloudconnectDiagnosticFunctionEnum } from './OvhcloudconnectDiagnosticFunctionEnum';

export type OvhcloudconnectDiagnostic = {
  function?: OvhcloudconnectDiagnosticFunctionEnum;
  id?: number;
  result?: OvhcloudconnectDiagnosticResult[] | null;
  status?: OvhcloudconnectTaskStatusEnum;
};
