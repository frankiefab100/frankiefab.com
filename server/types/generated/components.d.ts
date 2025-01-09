import type { Schema, Struct } from '@strapi/strapi';

export interface StacksUseCoreStack extends Struct.ComponentSchema {
  collectionName: 'components_stacks_use_core_stacks';
  info: {
    displayName: 'CoreStack';
  };
  attributes: {
    name: Schema.Attribute.String;
    useCase: Schema.Attribute.Text;
  };
}

export interface TechstackTechnology extends Struct.ComponentSchema {
  collectionName: 'components_techstack_technologies';
  info: {
    description: '';
    displayName: 'Technology';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'stacks-use.core-stack': StacksUseCoreStack;
      'techstack.technology': TechstackTechnology;
    }
  }
}
