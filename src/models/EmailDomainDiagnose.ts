/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailDomainDomainDiagnoseResultEnum } from './EmailDomainDomainDiagnoseResultEnum';
import { EmailDomainDomainDiagnoseFunctionEnum } from './EmailDomainDomainDiagnoseFunctionEnum';

export type EmailDomainDiagnose = {
  date: Date;
  function: EmailDomainDomainDiagnoseFunctionEnum;
  id: number;
  name: string | null;
  result: EmailDomainDomainDiagnoseResultEnum | null;
  trace: EmailDomainDomainDiagnoseResultEnum | null;
};
