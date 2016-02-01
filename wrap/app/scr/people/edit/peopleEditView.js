App.module("PeopleApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {

    Edit.PersonView = Marionette.ItemView.extend({
        template: "App.PeopleApp.Edit.Templates.Person",
        triggers: {
            "click a.js-cancel": "persons:list"
        },
        events: {
            "click button.js-submit": "submitClicked",
            "click label.js-person-authorised" : "toggleAuthorised",
            "click label.js-person-enabled" : "toggleEnabled"
        },
        templateHelpers: {
            getColor: function(colourId){
                var colour = _.find(this.colours, function(colour) { 
                    return colour.colourId == colourId 
                });
                return colour;
            }
        },
        submitClicked: function(e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.trigger("person:form:submit", data);
        },
        ui: {
            authorisedCheckbox: "#person-authorised",
            enabledCheckbox: "#person-enabled"
        },
        toggleAuthorised: function(e) {
            e.preventDefault();
            this.ui.authorisedCheckbox.toggle();
        },
        toggleEnabled: function(e) {
            e.preventDefault();
            this.ui.enabledCheckbox.toggle();
        }
    });

    Edit.NoPersonView = Marionette.ItemView.extend({
        template: "App.PeopleApp.Edit.Templates.NoPerson",
    });

});