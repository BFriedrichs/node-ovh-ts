/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangePublicFolderRightTypeEnum } from './EmailExchangePublicFolderRightTypeEnum';
import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';

export type EmailExchangeExchangePublicFolderPermission = {
  accessRights: EmailExchangePublicFolderRightTypeEnum;
  allowedAccountId: number;
  creationDate: Date;
  state: EmailExchangeObjectStateEnum;
  taskPendingId: number;
};
