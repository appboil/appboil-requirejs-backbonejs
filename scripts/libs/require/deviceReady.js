/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 10/2/12
 * Time: 3:34 PM
 */

define(['require'], function (require) {
    'use strict';

    function onDeviceReady(browser) {
        console.log('onDeviceReady called ' + browser);
    }

    function pageLoaded() {
        document.removeEventListener('DOMContentLoaded', pageLoaded, false);

        console.log('pageLoaded called');

        document.addEventListener('deviceready', onDeviceReady, false);
    }

//    document.addEventListener('DOMContentLoaded', pageLoaded, false);
//    window.addEventListener("load", pageLoaded, false);

//    if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
//        // This is running on a device so waiting for deviceready event
//        document.addEventListener('deviceready', onDeviceReady, false);
//    } else {
//        // On desktop don't have to wait for anything
//        onDeviceReady(true);
//    }

    function deviceReady(callback, platforms) {
        var regExp = new RegExp('(' + Object.keys(platforms).join('|') + ')', 'i'),
            platform = regExp.exec(navigator.userAgent);

        console.log('deviceReady called ' + platform);

        // If platform was found, replacing array with a string value
        if (platform != null) {

            platform = platform[0].toLowerCase();

            document.addEventListener('deviceready', onDeviceReady, false);

            var platformJS = platforms[platform];
            require([platformJS]);

        } else {
            onDeviceReady(true);
        }

    }

    deviceReady.version = '1.0.0';

    return deviceReady;
});