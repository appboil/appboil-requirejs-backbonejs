/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 10/2/12
 * Time: 3:34 PM
 */

define(function () {
    'use strict';

    function onDeviceReady() {

    }

    function pageLoaded() {
        document.removeEventListener('DOMContentLoaded', pageLoaded, false);

        document.addEventListener('deviceready', onDeviceReady, false);
    }

    document.addEventListener('DOMContentLoaded', pageLoaded, false);


    Object.keys(platforms);

    if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
        // This is running on a device so waiting for deviceready event
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        // On desktop don't have to wait for anything
        onDeviceReady(true);
    }

    function deviceReady(platforms, callback) {


    }

    deviceReady.version = '1.0.0';

    return deviceReady;
});