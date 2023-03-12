/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectTaskStatusEnum } from './OvhcloudconnectTaskStatusEnum';
import { OvhcloudconnectDiagnosticFunctionEnum } from './OvhcloudconnectDiagnosticFunctionEnum';
import { OvhcloudconnectDiagnosticResult } from './OvhcloudconnectDiagnosticResult';

export type OvhcloudconnectDiagnostic = {
  function: OvhcloudconnectDiagnosticFunctionEnum;
  id: number;
  result: OvhcloudconnectDiagnosticResult[] | null;
  status: OvhcloudconnectTaskStatusEnum;
};
