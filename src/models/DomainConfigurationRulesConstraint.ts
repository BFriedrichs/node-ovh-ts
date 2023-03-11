/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainConfigurationRulesContextEnum } from './DomainConfigurationRulesContextEnum';
import { DomainConfigurationRulesOperatorEnum } from './DomainConfigurationRulesOperatorEnum';
import { DomainConfigurationRulesRule } from './DomainConfigurationRulesRule';

export type DomainConfigurationRulesConstraint = {
  conditions: DomainConfigurationRulesRule | null;
  contexts: DomainConfigurationRulesContextEnum | null;
  operator: DomainConfigurationRulesOperatorEnum | null;
  value: string | null;
  values: string | null;
};
