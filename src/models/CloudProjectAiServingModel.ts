/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiServingModelWorkflowTemplateParameter } from './CloudProjectAiServingModelWorkflowTemplateParameter';
import { CloudProjectAiServingAPIStatusEnum } from './CloudProjectAiServingAPIStatusEnum';
import { CloudProjectAiServingVersionStatusEnum } from './CloudProjectAiServingVersionStatusEnum';
import { CloudProjectAiServingWorkflowTemplateEnum } from './CloudProjectAiServingWorkflowTemplateEnum';
import { CloudProjectAiServingAutoscalingSpec } from './CloudProjectAiServingAutoscalingSpec';

export type CloudProjectAiServingModel = {
  apiStatus?: CloudProjectAiServingAPIStatusEnum;
  autoscalingSpec?: CloudProjectAiServingAutoscalingSpec | null;
  createdAt?: Date;
  flavor?: string | null;
  id?: string;
  replicas?: number | null;
  url?: string | null;
  version?: number | null;
  versionStatus?: CloudProjectAiServingVersionStatusEnum;
  workflowTemplate?: CloudProjectAiServingWorkflowTemplateEnum | null;
  workflowTemplateParameters?: CloudProjectAiServingModelWorkflowTemplateParameter;
};
