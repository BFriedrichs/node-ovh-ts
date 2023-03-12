/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticPossibleValue } from './XdslLineDiagnosticPossibleValue';
import { XdslLineDiagnosticQuestionsEnum } from './XdslLineDiagnosticQuestionsEnum';

export type XdslLineDiagnosticQuestion = {
  defaultValue?: string | null;
  description?: string;
  enumValues?: string[] | null;
  name?: XdslLineDiagnosticQuestionsEnum;
  possibleValues?: XdslLineDiagnosticPossibleValue[] | null;
  required?: boolean | null;
  type?: string;
};
