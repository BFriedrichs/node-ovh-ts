/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';

export type CloudProjectAiNotebookNotebookUpdate = {
  labels?: Record<string, string> | null;
  resources?: CloudProjectAiResourcesInput | null;
  sshPublicKeys?: string[] | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
