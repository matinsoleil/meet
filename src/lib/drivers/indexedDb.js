import Dexie from 'dexie';
import { Database } from "../../config/config";

class IndexedDbDriver {

    constructor(database, tables) {
        this._db = new Dexie(database);
        this._db.version(2).stores(tables);
    }

    /**
     * Returns the database instance
     *
     * @returns {Dexie}
     */
    get db() {
        return this._db;
    }

    /**
     * Returns a collection of data from a query
     *
     * @param table
     * @param condition
     * @returns {Promise}
     */
    find(table, condition) {
        return this._db[table].get(condition).toArray();
    }

    /**
     * Returns a object that matches with the specified query
     *
     * @param table
     * @param condition
     * @returns {*|Dexie.Collection<T, Key>}
     */
    findOne(table, condition) {
        return this._db[table].get(condition);
    }




    /**
     * Returns a object that matches with the specified query
     *
     * @param table
     * @param condition
     * @returns {*|Dexie.Collection<T, Key>}
     */
    findWhere(table, condition) {
        return this._db[table].where(condition);
    }



    /**
     * Update an object that matches with the query
     *
     * @param table
     * @param condition
     * @param set
     * @returns {Dexie.Promise<number>}
     */
    findOneAndUpdate(table, condition, set) {
        return this.findOne(table, condition).modify(set);
    }


    /**
     * Remove an objetc that matches with the query
     *
     * @param table
     * @param condition
     * @returns {Dexie.Promise<number>}
     */
    // findKeyAndRemove(table, condition){

    findKeyAndRemove(table, id) {
        // return this.findOne(table, condition).delete();
        return this._db[table].delete(id);
    }


    /**
     * Remove an objetc that matches with the query
     *
     * @param table
     * @param condition
     * @returns {Dexie.Promise<number>}
     */
    // findOneAndRemove(table, condition){

    findOneAndRemove(table, key, param) {
        return this._db[table].where(":id").equals(key).modify(param);
    }


    

    /**
     * Create a new object in a specified table
     *
     * @param table
     * @param data
     * @returns {*}
     */
    add(table, data) {
        return this._db[table].add(data);
    }


    /**
     * Add multiple news objects in a specified table
     *
     * @param table
     * @param data
     * @returns {*}
     */
    addRows(table, datas) {
        datas.map(row => { return this.add(table, row) })
    }

    /**
     * Adds new or replaces existing object in the object store.
     *
     * @param table
     * @param data
     * @returns {*}
     */
    put(table, data) {
        return this._db[table].put(data);
    }

}

export default IndexedDbDriver;