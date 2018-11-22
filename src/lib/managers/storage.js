import IndexedDbDriver from '../drivers/indexedDb';
import LocalStorageDriver from '../drivers/localStorage';

import {Database} from '../../config/config';

class StorageManager {

    constructor(){
        this.build(Database.defaultType);
    }

    get storage() {
        return this._storage;
    }

    build(type){
        switch (type){
            case 'localstorage':
                this._storage =  new LocalStorageDriver();
                break;
            case 'indexeddb':
                if(!window.indexedDB) return this.build(Database.defaultIfError);
                this._storage = new IndexedDbDriver(Database.name, Database.table_schemas);
        }
    }

}

export default StorageManager;