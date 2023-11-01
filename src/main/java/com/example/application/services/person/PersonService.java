package com.example.application.services.person;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class PersonService
        extends CrudRepositoryService<Person, Long, PersonRepository> {

}
