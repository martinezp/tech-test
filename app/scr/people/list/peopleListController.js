App.module("PeopleApp.List", function(List, App, Backbone, Marionette, $, _){

	List.Controller = {
		listPersons: function(){

			var fetchingPersons = App.request("persons:entities");
			$.when(fetchingPersons).done( persons => {
				var personsView = new List.PersonsView({
					collection: persons
				});

				personsView.on("childview:person:edit", function(childView, args){
					App.trigger("person:edit", args.model.get("id"));
				});

				App.regions.main.show(personsView);
			});

		}
	}

});