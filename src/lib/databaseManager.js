export default class DatabaseManage {

    /**
     * @param {String} name of state affected
     * @param {ActionType} ActionType of Reducer,
     * @param {Map} map to handleActions ('redux-actions')
     * @param {String} 'local', 'session' or 'server'
     *  
     */
    static mapping = (state,keys,mapActions,type) => {
        for (let key of keys){
            let method = mapActions.get(key);
            (method)&&mapActions.set(key,DatabaseManage.addSaver(state,method,type));
        }
    } 

    /**
     * @param {ActionType} ActionType of reducer.
     * @param {Function} function to will be added the saver.
     * @param {String } 'local','session' or 'server'.
     * @param {String} stateName name of the key to will be saved the data, in the storage
     */
    static addSaver = (key,method,type,stateName=null) => {
        let keys = (key instanceof Array)&& key;
        const resultMethod = (!stateName)?
        (state,action) => {
            let result = method.apply(this,[state,action]);
            DatabaseManage.saver(key,result,type);
            return result; 
        } :
        (state,action) => {
            let result = method.apply(this,[state,action]);
            (keys.includes(action.type))&&DatabaseManage.saver(stateName,action.payload,type);
            return result;
        }
        return resultMethod;
    }

    static saver = (key,data,type='local') => {
        (type==='local')?DatabaseManage.saveData(key,data,type):
        (type==='session')?DatabaseManage.saveData(key,data,type):
        (type==='server')&&console.log('not implemented');
        return data;
    }
    
    static saveData = (key,data,type) => {
        (type==='local')?window.localStorage.setItem(key,JSON.stringify(data)):
        (type==='session')&&window.sessionStorage.setItem(key,JSON.stringify(data));;
    }

    static localStorageGet = (key) => {
        return window.localStorage.getItem(key);
    }

    static sessionStorageGet = (key) => {
        return window.sessionStorage.getItem(key);
    } 

    static restoreData = (store,stateKeys) => {
        for (let state in stateKeys){
            let data = JSON.parse(window.localStorage.getItem(state))
            store.dispatch({
                type: stateKeys[state].restoreKey,
                payload: (data)?data:stateKeys[state].defaultValue
            });
        }
    }
}