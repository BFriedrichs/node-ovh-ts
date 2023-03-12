/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangePublicFolderRightTypeEnum } from './EmailExchangePublicFolderRightTypeEnum';

export type EmailExchangeExchangePublicFolderPermission = {
  accessRights?: EmailExchangePublicFolderRightTypeEnum;
  allowedAccountId?: number;
  creationDate?: Date;
  state?: EmailExchangeObjectStateEnum;
  taskPendingId?: number;
};
