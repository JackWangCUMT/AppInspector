/*
 * File: app/view/StoreInspector.js
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

Ext.define('AI.view.StoreInspector', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.storeinspector',

    requires: [
        'Ext.grid.property.Grid',
        'Ext.grid.Panel'
    ],

    itemId: 'StoresPanel',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Stores',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    height: 300,
                    itemId: 'StoreList',
                    title: 'My Grid Panel',
                    store: 'Stores',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'id',
                            text: 'Store ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'count',
                            text: 'Record Count'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'RefreshStores',
                                    text: 'Refresh'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    resizable: true,
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            itemId: 'RecordList',
                            title: 'Store Records',
                            store: 'Records',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'id',
                                    text: 'Record ID',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'propertygrid',
                            itemId: 'RecordDetail',
                            width: 300,
                            resizable: true,
                            title: 'Record Details',
                            source: {
                                
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});