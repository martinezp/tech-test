App.module("PeopleApp.List", function(List, App, Backbone, Marionette, $, _) {

    List.PersonView = Marionette.ItemView.extend({
        tagName: "tr",
        template: "App.PeopleApp.List.Templates.Person",
        triggers: {
        	"click td a.js-person-edit": "person:edit"
        }
    });

    List.PersonsView = Marionette.CompositeView.extend({
        tagName: "div",
        className: "panel panel-default",
        template: "App.PeopleApp.List.Templates.Persons",
        childView: App.PeopleApp.List.PersonView,
        childViewContainer: "tbody"
    });

});