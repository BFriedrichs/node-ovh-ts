/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslLineDiagnosticCustomerActionsEnum } from './XdslLineDiagnosticCustomerActionsEnum';
import { XdslLineDiagnosticLineDetails } from './XdslLineDiagnosticLineDetails';
import { XdslLineDiagnosticRobotActionsEnum } from './XdslLineDiagnosticRobotActionsEnum';
import { XdslLineDiagnosticQuestion } from './XdslLineDiagnosticQuestion';
import { XdslLineDiagnosticSeltResult } from './XdslLineDiagnosticSeltResult';
import { XdslLineDiagnosticAnswers } from './XdslLineDiagnosticAnswers';
import { XdslLineDiagnosticCustomerActionToDo } from './XdslLineDiagnosticCustomerActionToDo';

export type XdslLineDiagnosticDiagnosticData = {
  actionsDone: XdslLineDiagnosticCustomerActionsEnum[];
  actionsToDo: XdslLineDiagnosticCustomerActionToDo[];
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
  toAnswer: XdslLineDiagnosticQuestion[];
};
