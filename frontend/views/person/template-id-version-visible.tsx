import { ExperimentalAutoForm as AutoForm } from '@hilla/react-crud';
import { PersonService } from 'Frontend/generated/endpoints';
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {TextArea} from "@hilla/react-components/TextArea";

export default function TemplateStringVisibleField() {
    return (
        <section className="flex flex-col p-m gap-m">
            <TextArea key={'template'} value={
                `<AutoForm service={PersonService} model={PersonModel}
                                   customLayoutRenderer={{
                                         template: [
                                               ['firstName', 'lastName', 'gender'],
                                               ['dateOfBirth', 'email'],
                                               ['startDate', 'endDate', 'shiftStart', 'active'],                                     
                                               ['description'],
                                               ['id', 'version'],
                                        ],
                                  }}
                />`}
                        label='What you write:'
                        style={{fontFamily: 'courier'}}
                readonly/>
            <h4>What you get:</h4>
            <AutoForm service={PersonService} model={PersonModel}
                      customLayoutRenderer={{
                          template: [
                              ['firstName', 'lastName', 'gender'],
                              ['dateOfBirth', 'email'],
                              ['startDate', 'endDate', 'shiftStart', 'active'],
                              ['description'],
                              ['id', 'version'],
                          ],
                      }}
            />
        </section>
    );
}
