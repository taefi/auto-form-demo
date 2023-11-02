import { ExperimentalAutoForm as AutoForm } from '@hilla/react-crud';
import { PersonService } from 'Frontend/generated/endpoints';
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {TextArea} from "@hilla/react-components/TextArea";
export default function Basic() {
  return (
      <section className="flex flex-col p-m gap-m">
        <TextArea key={'template'}
                  readonly
                  value={"<AutoForm service={PersonService} model={PersonModel} />"}
                  label='What you write:'
                  style={{fontFamily: 'courier'}}
        />
        <h4>What you get:</h4>
        <AutoForm service={PersonService} model={PersonModel} />
      </section>
  );
}

