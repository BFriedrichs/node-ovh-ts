/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRmaStep } from './TelephonyRmaStep';
import { TelephonyContact } from './TelephonyContact';
import { TelephonyRmaTypeEnum } from './TelephonyRmaTypeEnum';
import { TelephonyRmaReplaceTypeEnum } from './TelephonyRmaReplaceTypeEnum';
import { TelephonyRmaStatusEnum } from './TelephonyRmaStatusEnum';
import { TelephonyRmaOfferTypeEnum } from './TelephonyRmaOfferTypeEnum';

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
  steps: TelephonyRmaStep[];
  terminationDatetime: Date | null;
  type: TelephonyRmaTypeEnum;
};
