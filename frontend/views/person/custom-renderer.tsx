import React from 'react';
import { type AutoFormLayoutRendererProps, ExperimentalAutoForm as AutoForm } from '@hilla/react-crud';
import { PersonService } from 'Frontend/generated/endpoints';
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {TextArea} from "@hilla/react-components/TextArea";

function VerticalLayoutRenderer({ children, form }: AutoFormLayoutRendererProps<PersonModel>) {
  return <VerticalLayout>{children}</VerticalLayout>;
}

export default function CustomRenderer() {
  return (
      <section className="flex flex-col p-m gap-m">
        <TextArea key={'template'}
                  readonly
                  style={{fontFamily: 'courier'}}
                  value={
                    `function VerticalLayoutRenderer({ children, form }: AutoFormLayoutRendererProps<PersonModel>) {
   return <VerticalLayout>{children}</VerticalLayout>;
}
                     
<AutoForm service={PersonService} model={PersonModel}
          customLayoutRenderer={VerticalLayoutRenderer} />
`.trimStart()
                  }
                  label='What you write:'
        />
          <h4>What you get:</h4>
        <AutoForm service={PersonService} model={PersonModel}
                   customLayoutRenderer={VerticalLayoutRenderer} />
      </section>
  );
}
