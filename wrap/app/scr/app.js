var App = new Marionette.Application();

App.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

App.getCurrentRoute = function() {
    return Backbone.history.fragment
};

App.on("before:start", function() {
    var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",
        regions: {
            header: "#header-region",
            main: "#main-region",
            dialog: "#dialog-region"
        }
    })

    App.regions = new RegionContainer();
});

App.on("start", function() {
    if (Backbone.history) {
        Backbone.history.start();

        if (this.getCurrentRoute() === "") {
            App.trigger("persons:list");
        }
    }
});