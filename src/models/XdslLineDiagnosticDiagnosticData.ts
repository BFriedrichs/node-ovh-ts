/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticCustomerActionsEnum } from './XdslLineDiagnosticCustomerActionsEnum';
import { XdslLineDiagnosticQuestion } from './XdslLineDiagnosticQuestion';
import { XdslLineDiagnosticRobotActionsEnum } from './XdslLineDiagnosticRobotActionsEnum';
import { XdslLineDiagnosticLineDetails } from './XdslLineDiagnosticLineDetails';
import { XdslLineDiagnosticAnswers } from './XdslLineDiagnosticAnswers';
import { XdslLineDiagnosticCustomerActionToDo } from './XdslLineDiagnosticCustomerActionToDo';
import { XdslLineDiagnosticSeltResult } from './XdslLineDiagnosticSeltResult';

export type XdslLineDiagnosticDiagnosticData = {
  actionsDone: XdslLineDiagnosticCustomerActionsEnum;
  actionsToDo: XdslLineDiagnosticCustomerActionToDo;
  answers: XdslLineDiagnosticAnswers;
  comment: string | null;
  creationDate: Date;
  diagnosticDoneDate: Date | null;
  error: string;
  lastUpdate: Date;
  lineDetails: XdslLineDiagnosticLineDetails;
  robotAction: XdslLineDiagnosticRobotActionsEnum | null;
  seltTest: XdslLineDiagnosticSeltResult;
  timeout: number;
  toAnswer: XdslLineDiagnosticQuestion;
};
