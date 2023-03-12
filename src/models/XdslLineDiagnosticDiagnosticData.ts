/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticQuestion } from './XdslLineDiagnosticQuestion';
import { XdslLineDiagnosticLineDetails } from './XdslLineDiagnosticLineDetails';
import { XdslLineDiagnosticAnswers } from './XdslLineDiagnosticAnswers';
import { XdslLineDiagnosticRobotActionsEnum } from './XdslLineDiagnosticRobotActionsEnum';
import { XdslLineDiagnosticSeltResult } from './XdslLineDiagnosticSeltResult';
import { XdslLineDiagnosticCustomerActionToDo } from './XdslLineDiagnosticCustomerActionToDo';
import { XdslLineDiagnosticCustomerActionsEnum } from './XdslLineDiagnosticCustomerActionsEnum';

export type XdslLineDiagnosticDiagnosticData = {
  actionsDone?: XdslLineDiagnosticCustomerActionsEnum[];
  actionsToDo?: XdslLineDiagnosticCustomerActionToDo[];
  answers?: XdslLineDiagnosticAnswers;
  comment?: string | null;
  creationDate?: Date;
  diagnosticDoneDate?: Date | null;
  error?: string;
  lastUpdate?: Date;
  lineDetails?: XdslLineDiagnosticLineDetails;
  robotAction?: XdslLineDiagnosticRobotActionsEnum | null;
  seltTest?: XdslLineDiagnosticSeltResult;
  timeout?: number;
  toAnswer?: XdslLineDiagnosticQuestion[];
};
