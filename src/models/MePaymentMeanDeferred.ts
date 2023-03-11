/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentMeanDeferredStateEnum } from './MePaymentMeanDeferredStateEnum';
import { MePaymentMeanIconData } from './MePaymentMeanIconData';

export type MePaymentMeanDeferred = {
  creationDate: Date;
  defaultPaymentMean: boolean;
  description: string | null;
  icon: MePaymentMeanIconData | null;
  id: number;
  label: string | null;
  state: MePaymentMeanDeferredStateEnum;
};
