/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiServingWorkflowTemplateEnum } from './CloudProjectAiServingWorkflowTemplateEnum';
import { CloudProjectAiServingFrameworkIdEnum } from './CloudProjectAiServingFrameworkIdEnum';
import { CloudProjectAiServingBackendIdEnum } from './CloudProjectAiServingBackendIdEnum';
import { CloudProjectAiServingAutoscalingSpec } from './CloudProjectAiServingAutoscalingSpec';

export type CloudProjectAiServingModelDefinition = {
  autoscalingSpec?: CloudProjectAiServingAutoscalingSpec | null;
  backend?: CloudProjectAiServingBackendIdEnum | null;
  flavor: string;
  framework?: CloudProjectAiServingFrameworkIdEnum | null;
  id: string;
  imageId?: string | null;
  storagePath?: string | null;
  workflowTemplate?: CloudProjectAiServingWorkflowTemplateEnum | null;
};
