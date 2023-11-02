import {ExperimentalAutoCrud as AutoCrud} from "@hilla/react-crud";
import {PersonService} from "Frontend/generated/endpoints";
import PersonModel from "Frontend/generated/com/example/application/services/person/PersonModel";
import {TextArea} from "@hilla/react-components/TextArea";

export default function CrudBasic() {

    return (
        <section className="flex flex-col p-m gap-m">
            <TextArea key={'template'}
                      readonly
                      value={"<AutoCrud service={PersonService} model={PersonModel} />"}
                      label='What you write:'
                      style={{fontFamily: 'courier'}}
            />
            <h4>What you get:</h4>
            <AutoCrud service={PersonService} model={PersonModel} />
        </section>
    );
}