/**
 * Created by Piotr Walczyszyn (@pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:20 AM
 */

require.config({
    paths:{
        jQuery:'libs/jquery/jquery-loader',
        jQueryMobile:'libs/jquery.mobile/jquery.mobile-loader',
        underscore:'libs/underscore/underscore-loader',
        Backbone:'libs/backbone/backbone-loader',
        order:'libs/require/order-1.0.5',
        text:'libs/require/text-1.0.6',
        domReady:'libs/require/domReady-1.0.0',
        PhoneGap:'libs/phonegap/phonegap-loader'
    }
});

require([
    'order!jQuery',
    'order!PhoneGap'],
    function ($, PhoneGap) {

        // Binding to mobileinit function in order to configure jQM when it loads
        $(document).bind("mobileinit", function () {
            // Turning off page auto initialization, we want to control it programatically
            $.mobile.autoInitializePage = false;
            // We want handle link clicks from Backbone
            $.mobile.linkBindingEnabled = false;
            // We don't need this as we will be doing page navigation programatically
            $.mobile.hashListeningEnabled = false;
            // We don't need this as we will be doing page navigation programatically
            $.mobile.pushStateEnabled = false;
        });

        // After above initializations are done we can launch app.init
        // jQueryMobile is referenced in order to start its initialization
        require(['app', 'jQueryMobile'], function (app) {
            app.init();
        })
    });