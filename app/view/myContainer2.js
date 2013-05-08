/*
 * File: app/view/myContainer2.js
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

Ext.define('Booking.view.myContainer2', {
    extend: 'Ext.Container',
    alias: 'widget.mycontainer2',

    requires: [
        'Booking.view.myComponent2'
    ],

    config: {
        id: 'myContainer2',
        itemId: 'myContainer2',
        layout: {
            type: 'card'
        },
        scrollable: {
            direction: 'horizontal',
            directionLock: true
        },
        items: [
            {
                xtype: 'myComponent2'
            }
        ]
    }

});