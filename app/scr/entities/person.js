App.module("Entities", function(Entities, App, Backbone, Marionette, $, _, Relational){

	Entities.Person = Backbone.RelationalModel.extend({
		urlRoot: "../api/PeopleApi",
		defaults: {
			firstName: "",
			lastName: ""
		}, relations: [{
			type: Backbone.HasMany,
			key: "colours",
			relatedModel: 'App.Entities.Colours',
			autoFetch: true
		}]
	});

	Entities.Persons = Backbone.Collection.extend({
		url: "../api/PeopleApi",
		model: Entities.Person
	});

	var API = {
		getPersonEntity: (personId) => {
			var person = Entities.Person.findOrCreate({id : personId});
			var defer = $.Deferred();
			person.fetch({
				success: data => { defer.resolve(data); }
			});
			return defer.promise();
		},

		getPersonEntities: () => {
			var persons = new Entities.Persons();
			var defer = $.Deferred();
			persons.fetch({
				success: data => { defer.resolve(data); }
			});
			var promise = defer.promise();
			return promise.promise();
		}
	};

	App.reqres.setHandler("person:entity", function(id){
		return API.getPersonEntity(id);
	});

	App.reqres.setHandler("persons:entities", function(){
		return API.getPersonEntities();
	});

});