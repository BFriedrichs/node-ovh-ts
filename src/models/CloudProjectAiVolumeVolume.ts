/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumePublicSwift } from './CloudProjectAiVolumePublicSwift';
import { CloudProjectAiVolumePrivateSwift } from './CloudProjectAiVolumePrivateSwift';
import { CloudProjectAiVolumePublicGit } from './CloudProjectAiVolumePublicGit';
import { CloudProjectAiVolumeStandalone } from './CloudProjectAiVolumeStandalone';
import { CloudProjectAiVolumeDataStore } from './CloudProjectAiVolumeDataStore';
import { CloudProjectAiVolumePermissionEnum } from './CloudProjectAiVolumePermissionEnum';

export type CloudProjectAiVolumeVolume = {
  cache: boolean;
  container: string | null;
  dataStore: CloudProjectAiVolumeDataStore | null;
  id: string;
  mountPath?: string;
  permission?: CloudProjectAiVolumePermissionEnum;
  prefix: string | null;
  privateSwift: CloudProjectAiVolumePrivateSwift | null;
  publicGit: CloudProjectAiVolumePublicGit | null;
  publicSwift: CloudProjectAiVolumePublicSwift | null;
  region: string | null;
  standalone: CloudProjectAiVolumeStandalone | null;
  targetDataStore: CloudProjectAiVolumeDataStore | null;
  targetPrivateSwift: CloudProjectAiVolumePrivateSwift | null;
};
