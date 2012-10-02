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
        // RequireJS plugin
        deviceReady:'libs/require/deviceReady',
        // underscore library
        underscore:'libs/underscore/underscore',
        // Backbone.js library
        Backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.8.1',
        // jQuery Mobile framework
        jqm:'libs/jquery.mobile/jquery.mobile-1.2.0-rc.2',
        // jQuery Mobile plugin for Backbone views navigation
        jqmNavigator:'libs/jquery.mobile/jqmNavigator'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        jqm:{
            deps:['jquery', 'jqm-config'/* jQM specific config */, 'jqmNavigator']
        }
    }
});

require(['deviceReady', 'views/home/HomeView', 'jqm'],
    function (deviceReady, HomeView) {

        deviceReady(function () {
                console.log('device ready called');
            },
            {
                android:'libs/cordova/cordova-android-2.1.0.js',
                ios:'libs/cordova/cordova-ios-2.1.0.js'
            }
        );

//        // domReady is RequireJS plugin that triggers when DOM is ready
//        domReady(function () {
//
//            function onDeviceReady(desktop) {
//                // Hiding splash screen when app is loaded
//                if (desktop !== true)
//                    cordova.exec(null, null, 'SplashScreen', 'hide', []);
//
//                // Pushing MainView
//                $.mobile.jqmNavigator.pushView(new HomeView());
//            }
//
//            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
//                // This is running on a device so waiting for deviceready event
//                document.addEventListener('deviceready', onDeviceReady, false);
//            } else {
//                // On desktop don't have to wait for anything
//                onDeviceReady(true);
//            }
//
//        });

    });