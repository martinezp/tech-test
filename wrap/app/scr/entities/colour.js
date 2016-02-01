App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

	Entities.Colour = Backbone.RelationalModel.extend({
		defaults: {
			isChecked: "false"
		}
	});

	Entities.Colours = Backbone.RelationalModel.extend({
		model: Entities.Colour
	});

});