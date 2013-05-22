/*
 * File: app/view/authContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Booking.view.authContainer', {
    extend: 'Ext.Container',

    config: {
        html: '<iframe id="authFrame" src="authiframe.html" width="100%" height="100%" frameborder="0"></iframe>',
        listeners: [
            {
                fn: 'onContainerPainted',
                event: 'painted'
            }
        ]
    },

    onContainerPainted: function(element, eOpts) {
        var me = this,
            frame = window.frames[0];

        try {
            frame.document.getElementById('tokenValue').addEventListener("dataLoadedCustom", this.hasLoaded);
        } catch(e) {
            me.hasLoaded(me);
        }
    },

    hasLoaded: function(thisFunction) {
        var me = thisFunction,
            frame = window.frames[0],
            tokenData,
            keys;

        try {
            tokenData = frame.document.getElementById('tokenValue').innerHTML;
            keys = Object.keys(tokenData);
        } catch(e) {
            Booking.app.authToken = tokenData;
            me.generateItems(me);
        }
    },

    generateItems: function(thisFunction) {
        var me = thisFunction,
            token = Booking.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar',
            items = [],
            calendarId;

        gapi.client.setApiKey(apiKey);
        gapi.auth.setToken(token);

        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, function(authResult) {
        if (authResult) {
            gapi.client.load('calendar', 'v3', function() {
                var request = gapi.client.calendar.calendarList.list();
                request.execute(function(resp) {
                    console.log(resp);
                    for (var i = 0; i < resp.items.length; i++) {
                        calendarId = resp.items[i].id;
                        items.push({
                            html: '<p>'+ calendarId +'</p>'
                        });
                        console.log(calendarId);
                    }
                    Ext.getCmp('mainCarousel').setItems(items);
                    Ext.Viewport.setActiveItem('mainCarousel');
                });
            });
        }
    });


    }

});