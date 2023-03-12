/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeObjectStateEnum } from './EmailExchangeObjectStateEnum';
import { EmailExchangePublicFolderTypeEnum } from './EmailExchangePublicFolderTypeEnum';
import { EmailExchangePublicFolderRightTypeEnum } from './EmailExchangePublicFolderRightTypeEnum';

export type EmailExchangePublicFolder = {
  anonymousPermission?: EmailExchangePublicFolderRightTypeEnum;
  creationDate?: Date | null;
  defaultPermission?: EmailExchangePublicFolderRightTypeEnum;
  hasSubFolders?: boolean | null;
  itemCount?: number | null;
  lastAccessTime?: Date | null;
  lastModificationTime?: Date | null;
  lastUserAccessTime?: Date | null;
  lastUserModificationTime?: Date | null;
  path?: string;
  quota?: number;
  state?: EmailExchangeObjectStateEnum;
  taskPendingId?: number;
  totalItemSize?: number | null;
  type?: EmailExchangePublicFolderTypeEnum;
};
