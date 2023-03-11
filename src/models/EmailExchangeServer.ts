/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeServerStateEnum } from './EmailExchangeServerStateEnum';
import { EmailExchangeExchangeCommercialVersionEnum } from './EmailExchangeExchangeCommercialVersionEnum';

export type EmailExchangeServer = {
  commercialVersion: EmailExchangeExchangeCommercialVersionEnum;
  currentDiskUsage: number | null;
  diskSize: number | null;
  individual2010: boolean;
  ip: string;
  ipV6: string | null;
  isAValid: boolean;
  isAaaaValid: boolean;
  isPtrV6Valid: boolean;
  isPtrValid: boolean;
  owaMfa: boolean;
  state: EmailExchangeServerStateEnum;
  taskPendingId: number;
  version: number | null;
};
