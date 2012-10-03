/**
 * Created by Piotr Walczyszyn (@pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:20 AM
 */

require.config({
    paths:{
        // RequireJS plugin
        text:'libs/require/text',
        // RequireJS plugin
        domReady:'libs/require/domReady',
        // underscore library
        underscore:'libs/underscore/underscore',
        // Backbone.js library
        Backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.8.2'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        }
    }
});

require(['domReady', 'views/home/HomeView'],
    function (domReady, HomeView) {

        // domReady is RequireJS plugin that triggers when DOM is ready
        domReady(function () {

            var homeView = (new HomeView()).render();
            $('body').html(homeView.el);

        });

    });