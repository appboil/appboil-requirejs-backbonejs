/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:53 AM
 */

define(['underscore', 'Backbone', 'text!views/next/NextViewTemplate.html!strip'],
    function (_, Backbone, NextViewTemplate) {

        var NextView = Backbone.View.extend({

            render:function () {
                this.$el.html(_.template(NextViewTemplate));
                return this;
            }

        });

        return NextView;
    });