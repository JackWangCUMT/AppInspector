/*
 * File: app/view/AppProfiles.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.view.AppProfiles', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.appprofiles',

    itemId: 'ProfilesPanel',
    title: 'Profiles',
    tabPosition: 'right',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    itemId: 'Overnested',
                    title: 'Overnesting',
                    store: 'Overnested',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileOvernesting',
                                    text: 'Profile'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    itemId: 'BoxLayouts',
                    title: 'Box Layouts',
                    store: 'BoxLayouts',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileBoxLayouts',
                                    text: 'Profile'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});