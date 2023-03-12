/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentMeanBankAccountStateEnum } from './MePaymentMeanBankAccountStateEnum';
import { MePaymentMeanIconData } from './MePaymentMeanIconData';

export type MePaymentMeanBankAccount = {
  bic?: string;
  creationDate?: Date;
  defaultPaymentMean?: boolean;
  description?: string | null;
  iban?: string;
  icon?: MePaymentMeanIconData | null;
  id?: number;
  mandateSignatureDate?: Date | null;
  ownerAddress?: string;
  ownerName?: string;
  state?: MePaymentMeanBankAccountStateEnum;
  uniqueReference?: string;
  validationDocumentLink?: string | null;
};
