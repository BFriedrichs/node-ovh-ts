/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRmaTypeEnum } from './TelephonyRmaTypeEnum';
import { TelephonyContact } from './TelephonyContact';
import { TelephonyRmaReplaceTypeEnum } from './TelephonyRmaReplaceTypeEnum';
import { TelephonyRmaStep } from './TelephonyRmaStep';
import { TelephonyRmaOfferTypeEnum } from './TelephonyRmaOfferTypeEnum';
import { TelephonyRmaStatusEnum } from './TelephonyRmaStatusEnum';

export type TelephonyRma = {
  cancellable: boolean;
  creationDatetime: Date;
  equipmentReference: string;
  id: string;
  newMerchandise: string | null;
  offerTypeNew: TelephonyRmaOfferTypeEnum | null;
  offerTypeOld: TelephonyRmaOfferTypeEnum;
  process: TelephonyRmaReplaceTypeEnum;
  receptionDatetime: Date | null;
  shippingContact: TelephonyContact;
  status: TelephonyRmaStatusEnum;
  steps: TelephonyRmaStep;
  terminationDatetime: Date | null;
  type: TelephonyRmaTypeEnum;
};
