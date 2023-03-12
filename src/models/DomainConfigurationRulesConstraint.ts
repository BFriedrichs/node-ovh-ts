/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainConfigurationRulesOperatorEnum } from './DomainConfigurationRulesOperatorEnum';
import { DomainConfigurationRulesRule } from './DomainConfigurationRulesRule';
import { DomainConfigurationRulesContextEnum } from './DomainConfigurationRulesContextEnum';

export type DomainConfigurationRulesConstraint = {
  conditions?: DomainConfigurationRulesRule | null;
  contexts?: DomainConfigurationRulesContextEnum[] | null;
  operator?: DomainConfigurationRulesOperatorEnum | null;
  value?: string | null;
  values?: string[] | null;
};
