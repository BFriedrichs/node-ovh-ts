/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeDataStore } from './CloudProjectAiVolumeDataStore';
import { CloudProjectAiVolumeStandalone } from './CloudProjectAiVolumeStandalone';
import { CloudProjectAiVolumePrivateSwift } from './CloudProjectAiVolumePrivateSwift';
import { CloudProjectAiVolumePublicGit } from './CloudProjectAiVolumePublicGit';
import { CloudProjectAiVolumePublicSwift } from './CloudProjectAiVolumePublicSwift';
import { CloudProjectAiVolumePermissionEnum } from './CloudProjectAiVolumePermissionEnum';

export type CloudProjectAiVolumeVolume = {
  cache?: boolean;
  container?: string | null;
  dataStore?: CloudProjectAiVolumeDataStore | null;
  id?: string;
  mountPath: string;
  permission: CloudProjectAiVolumePermissionEnum;
  prefix?: string | null;
  privateSwift?: CloudProjectAiVolumePrivateSwift | null;
  publicGit?: CloudProjectAiVolumePublicGit | null;
  publicSwift?: CloudProjectAiVolumePublicSwift | null;
  region?: string | null;
  standalone?: CloudProjectAiVolumeStandalone | null;
  targetDataStore?: CloudProjectAiVolumeDataStore | null;
  targetPrivateSwift?: CloudProjectAiVolumePrivateSwift | null;
};
