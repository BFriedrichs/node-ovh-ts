/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailDomainDomainDiagnoseFunctionEnum } from './EmailDomainDomainDiagnoseFunctionEnum';
import { EmailDomainDomainDiagnoseResultEnum } from './EmailDomainDomainDiagnoseResultEnum';

export type EmailDomainDiagnose = {
  date: Date;
  function: EmailDomainDomainDiagnoseFunctionEnum;
  id: number;
  name: string | null;
  result: EmailDomainDomainDiagnoseResultEnum | null;
  trace: EmailDomainDomainDiagnoseResultEnum | null;
};
