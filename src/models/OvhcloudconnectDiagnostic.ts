/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvhcloudconnectDiagnosticFunctionEnum } from './OvhcloudconnectDiagnosticFunctionEnum';
import { OvhcloudconnectTaskStatusEnum } from './OvhcloudconnectTaskStatusEnum';
import { OvhcloudconnectDiagnosticResult } from './OvhcloudconnectDiagnosticResult';

export type OvhcloudconnectDiagnostic = {
  function: OvhcloudconnectDiagnosticFunctionEnum;
  id: number;
  result: OvhcloudconnectDiagnosticResult | null;
  status: OvhcloudconnectTaskStatusEnum;
};
