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
        underscore:'libs/underscore/underscore-loader',
        Backbone:'libs/backbone/backbone-loader',
        order:'libs/require/order-1.0.5',
        text:'libs/require/text-1.0.6',
        domReady:'libs/require/domReady-1.0.0'
    }
});

require(['order!jQuery', 'order!app'],
    function ($, app) {

        app.init();

    });