/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiServingAutoscalingSpec } from './CloudProjectAiServingAutoscalingSpec';
import { CloudProjectAiServingWorkflowTemplateEnum } from './CloudProjectAiServingWorkflowTemplateEnum';
import { CloudProjectAiServingAPIStatusEnum } from './CloudProjectAiServingAPIStatusEnum';
import { CloudProjectAiServingModelWorkflowTemplateParameter } from './CloudProjectAiServingModelWorkflowTemplateParameter';
import { CloudProjectAiServingVersionStatusEnum } from './CloudProjectAiServingVersionStatusEnum';

export type CloudProjectAiServingModel = {
  apiStatus: CloudProjectAiServingAPIStatusEnum;
  autoscalingSpec: CloudProjectAiServingAutoscalingSpec | null;
  createdAt: Date;
  flavor: string | null;
  id: string;
  replicas: number | null;
  url: string | null;
  version: number | null;
  versionStatus: CloudProjectAiServingVersionStatusEnum;
  workflowTemplate: CloudProjectAiServingWorkflowTemplateEnum | null;
  workflowTemplateParameters: CloudProjectAiServingModelWorkflowTemplateParameter;
};
