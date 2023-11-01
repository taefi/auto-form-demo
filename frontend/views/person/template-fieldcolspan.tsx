import { ExperimentalAutoForm as AutoForm } from '@hilla/react-crud';
import { PersonService } from 'Frontend/generated/endpoints';
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {TextArea} from "@hilla/react-components/TextArea";

export default function TemplateFieldColspan() {
  return (
      <section className="flex flex-col p-m gap-m">
          <TextArea key={'template'}
                    readonly
                    style={{fontFamily: 'courier'}}
                    value={
                      `<AutoForm service={PersonService} model={PersonModel}
                      customLayoutRenderer={{
                             template: [
                                   [ { property: 'firstName', colSpan: 2 }, { property: 'lastName', colSpan: 2 }, { property: 'gender', colSpan: 2 } ],
                                   [ { property: 'dateOfBirth', colSpan: 2 }, { property: 'email', colSpan: 4 } ],
                                   [ { property: 'startDate', colSpan: 2 }, { property: 'endDate', colSpan: 2 }, { property: 'active', colSpan: 2 } ],
                                   [ { property: 'team', colSpan: 4 }, { property: 'manager', colSpan: 2 } ],
                                   [ { property: 'description', colSpan: 6 }]
                             ]
                    }}
         />`.trimStart()
                    }
          />
          <AutoForm service={PersonService} model={PersonModel}
                    customLayoutRenderer={{
                       template: [
                         [
                           { property: 'firstName', colSpan: 2 },
                           { property: 'lastName', colSpan: 2 },
                           { property: 'gender', colSpan: 2 },
                         ],
                         [
                           { property: 'dateOfBirth', colSpan: 2 },
                           { property: 'email', colSpan: 4 },
                         ],
                         [
                           { property: 'startDate', colSpan: 2 },
                           { property: 'endDate', colSpan: 2 },
                           { property: 'active', colSpan: 2 },
                         ],
                         [
                           { property: 'team', colSpan: 4 },
                           { property: 'manager', colSpan: 2 },
                         ],
                         [
                           { property: 'description', colSpan: 6 },
                         ],
                      ],
                    }}
          />
      </section>
  );
}
