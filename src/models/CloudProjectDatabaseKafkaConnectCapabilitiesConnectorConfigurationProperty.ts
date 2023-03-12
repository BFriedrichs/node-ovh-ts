/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseKafkaConnectCapabilitiesConnectorPropertyImportanceEnum } from './CloudProjectDatabaseKafkaConnectCapabilitiesConnectorPropertyImportanceEnum';
import { CloudProjectDatabaseKafkaConnectConnectorPropertyTypeEnum } from './CloudProjectDatabaseKafkaConnectConnectorPropertyTypeEnum';

export type CloudProjectDatabaseKafkaConnectCapabilitiesConnectorConfigurationProperty = {
  defaultValue: string | null;
  description: string;
  displayName: string;
  group: string;
  importance: CloudProjectDatabaseKafkaConnectCapabilitiesConnectorPropertyImportanceEnum;
  name: string;
  required: boolean;
  type: CloudProjectDatabaseKafkaConnectConnectorPropertyTypeEnum;
  values: string[] | null;
};
