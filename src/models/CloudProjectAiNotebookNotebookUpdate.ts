/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';

export type CloudProjectAiNotebookNotebookUpdate = {
  labels: Record<string, string> | null;
  resources: CloudProjectAiResourcesInput | null;
  sshPublicKeys: string[] | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume[] | null;
};
