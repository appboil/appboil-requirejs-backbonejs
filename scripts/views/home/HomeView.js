/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:53 AM
 */

define([
    'jQuery',
    'underscore',
    'Backbone',
    'views/next/NextView',
    'text!views/home/HomeViewTemplate.html!strip'],
    function ($, _, Backbone, NextView, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({

            events:{
                'click #gotoNext':'gotoNext'
            },

            render:function () {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            gotoNext:function (event) {
                var nextPage = (new NextView).render().$el;
                $('body').html(nextPage);
            }
        });

        return HomeView;
    });