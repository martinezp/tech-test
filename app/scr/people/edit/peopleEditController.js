App.module("PeopleApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {

    Edit.Controller = {
        editPerson: function(id) {

            var fetchingPerson = App.request("person:entity", id);
            $.when(fetchingPerson).done(person => {
                var personView = new Edit.PersonView({
                    model: person
                });

                personView.on("persons:list", function() {
                    App.trigger("persons:list");
                });

                personView.on("person:form:submit", function(data) {
                    var defer = $.Deferred();
                    person.attributes.colours.each(function(colour) {
                        if (colour.attributes.colourId === 1) {
                            colour.attributes.isChecked = data.red;
                        } else if (colour.attributes.colourId === 2) {
                            colour.attributes.isChecked = data.green;
                        } else if (colour.attributes.colourId === 3) {
                            colour.attributes.isChecked = data.blue;
                        }
                    });
                    person.save(data, {
                        success: function() {
                            defer.resolve();
                        }
                    });
                    var promise = defer.promise();
                    $.when(promise).done(function() {
                        App.trigger("persons:list");
                    });
                });

                App.regions.main.show(personView);
            });

        }
    }

});