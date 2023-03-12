/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainConfigurationRulesRule } from './DomainConfigurationRulesRule';
import { DomainConfigurationRulesContextEnum } from './DomainConfigurationRulesContextEnum';
import { DomainConfigurationRulesOperatorEnum } from './DomainConfigurationRulesOperatorEnum';

export type DomainConfigurationRulesConstraint = {
  conditions: DomainConfigurationRulesRule | null;
  contexts: DomainConfigurationRulesContextEnum[] | null;
  operator: DomainConfigurationRulesOperatorEnum | null;
  value: string | null;
  values: string[] | null;
};
