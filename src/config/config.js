export const Database = {
    defaultType: 'indexeddb',
    defaultIfError: 'localstorage',
    name : 'claro_connect_chat',
    table_schemas: {
        cn_messages: [
            '++id',
            'messageType',
            'messageid',
            'msgtext',
            'senderUri',
            'receiverUri',
            'sendTime',
            'status',
            'ownMessage'
        ].join(','),
        cn_status: [
            'id',
            'message'
        ].join(','),
        cn_config: [
            'key',
            'data'
        ].join(','),
    },
    tables: {
        messages: 'cn_messages',
        status: 'cn_status',
        config: 'cn_config',
    }
};