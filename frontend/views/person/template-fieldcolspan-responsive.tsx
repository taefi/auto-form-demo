import { ExperimentalAutoForm as AutoForm } from '@hilla/react-crud';
import { PersonService } from 'Frontend/generated/endpoints';
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {TextArea} from "@hilla/react-components/TextArea";

export default function TemplateFieldColspanResponsive() {
    return (
        <section className="flex flex-col p-m gap-m">
            <TextArea key={'template'}
                      readonly
                      style={{fontFamily: 'courier'}}
                      value={
                          `<AutoForm service={PersonService} model={PersonModel}
                      customLayoutRenderer={{
                             template: [
                                   [ { property: 'firstName', colSpan: 1 }, { property: 'lastName', colSpan: 1 }, { property: 'gender', colSpan: 1 } ],
                                   [ { property: 'dateOfBirth', colSpan: 1 }, { property: 'email', colSpan: 2 } ],
                                   [ { property: 'startDate', colSpan: 1 }, { property: 'endDate', colSpan: 1 }, { property: 'active', colSpan: 1 } ],
                                   [ { property: 'team', colSpan: 2 }, { property: 'manager', colSpan: 1 } ],
                                   [ { property: 'description', colSpan: 3 } ]
                             ],
                             responsiveSteps: [
                                { minWidth: '0', columns: 1 },
                                { minWidth: '800px', columns: 2 },
                                { minWidth: '1600px', columns: 3 }
                             ],
                    }}
         />`.trimStart()
                      }
                      label='What you write:'
            />
            <h4>What you get:</h4>
            <AutoForm service={PersonService} model={PersonModel}
                      customLayoutRenderer={{
                          template: [
                              [
                                  { property: 'firstName', colSpan: 1 },
                                  { property: 'lastName', colSpan: 1 },
                                  { property: 'gender', colSpan: 1 },
                              ],
                              [
                                  { property: 'dateOfBirth', colSpan: 1 },
                                  { property: 'email', colSpan: 2 },
                              ],
                              [
                                  { property: 'startDate', colSpan: 1 },
                                  { property: 'endDate', colSpan: 1 },
                                  { property: 'active', colSpan: 1 },
                              ],
                              [
                                  { property: 'team', colSpan: 2 },
                                  { property: 'manager', colSpan: 1 },
                              ],
                              [
                                  { property: 'description', colSpan: 3 },
                              ],
                          ],
                          responsiveSteps: [
                              { minWidth: '0', columns: 1 },
                              { minWidth: '800px', columns: 2 },
                              { minWidth: '1600px', columns: 3 }
                          ],
                      }}
            />
        </section>
    );
}
