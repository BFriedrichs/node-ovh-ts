/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiServingFrameworkIdEnum } from './CloudProjectAiServingFrameworkIdEnum';
import { CloudProjectAiServingWorkflowTemplateEnum } from './CloudProjectAiServingWorkflowTemplateEnum';
import { CloudProjectAiServingAutoscalingSpec } from './CloudProjectAiServingAutoscalingSpec';
import { CloudProjectAiServingBackendIdEnum } from './CloudProjectAiServingBackendIdEnum';

export type CloudProjectAiServingModelDefinition = {
  autoscalingSpec: CloudProjectAiServingAutoscalingSpec | null;
  backend: CloudProjectAiServingBackendIdEnum | null;
  flavor?: string;
  framework: CloudProjectAiServingFrameworkIdEnum | null;
  id?: string;
  imageId: string | null;
  storagePath: string | null;
  workflowTemplate: CloudProjectAiServingWorkflowTemplateEnum | null;
};
