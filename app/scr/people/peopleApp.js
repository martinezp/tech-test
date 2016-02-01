App.module("PeopleApp", function(PeopleApp, App, Backbone, Marionette, $, _) {

    PeopleApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "people": "listPersons",
            "people/:id": "editPerson"
        }
    });

    var API = {
        listPersons: function() {
            PeopleApp.List.Controller.listPersons();
        },

        editPerson: function(id) {
            PeopleApp.Edit.Controller.editPerson(id);
        }
    }

    App.on("persons:list", function() {
        App.navigate("people");
        API.listPersons();
    });

    App.on("person:edit", function(id) {
        App.navigate("people/" + id);
        API.editPerson(id);
    });

    PeopleApp.on("start", function() {
        new PeopleApp.Router({
            controller: API
        });
    });

});