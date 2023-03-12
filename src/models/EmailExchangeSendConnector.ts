/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangeSmartHostAuthMechanismEnum } from './EmailExchangeSmartHostAuthMechanismEnum';

export type EmailExchangeSendConnector = {
  creationDate?: Date;
  displayName?: string;
  id?: number | null;
  lastUpdateDate?: Date | null;
  maxSendSize?: number;
  port?: number;
  requireTLS?: boolean;
  smartHost?: string;
  smartHostAuthMechanism?: EmailExchangeSmartHostAuthMechanismEnum;
  state?: EmailExchangeObjectStateEnum;
  taskPendingId?: number | null;
};
