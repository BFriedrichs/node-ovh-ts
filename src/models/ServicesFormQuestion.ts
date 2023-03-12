/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesFormAnswerAllowedValue } from './ServicesFormAnswerAllowedValue';
import { ServicesFormAnswerTypeEnum } from './ServicesFormAnswerTypeEnum';

export type ServicesFormQuestion = {
  answers: ServicesFormAnswerAllowedValue[] | null;
  mandatory: boolean;
  question: string;
  type: ServicesFormAnswerTypeEnum;
};
