import { ZTE_CLIENTINIT, ZTE_GETTOKEN, ZTE_CBPUSHLINKCONNECTED, ZTE_CBPUSHLINKDISCONNECTED, ZTE_CBREGISTERSUCCESS, ZTE_CBREGISTERFAIL, ZTE_CBREGISTERREFRESHSUCCESS, ZTE_CBREGISTERREFRESHFAIL, ZTE_CBSINGLEMSGRECV, ZTE_CBSINGLERECVLOCATION, ZTE_CBSINGLEMULTMSGRECVBASE, ZTE_CBSINGLERECVREPORT, ZTE_LOGOUT, ZTE_SENDSINGLETXTMSG, ZTE_SENDSINGLELOCATIONMSG, ZTE_SENDSINGLEFILE } from "../../actionstypes";
import MessageCenter from './../../../libs/MessageCenter';

var messageCenter = undefined;

const tokenRefresh = {
    _success: (data) => {
        return {
            type: ZTE_GETTOKEN + '_REFRESH',
            payload: 'Token Refresh'+ data
        }
    },
    _fail: (data) => {
        return {
            type: ZTE_GETTOKEN + '_REFRESH_FAIL',
            payload: 'Token Refresh Fail: ' + JSON.stringify(data)
        }
    }
}

const pushLink = {
    _connected: (data) => {
        return {
            type: ZTE_CBPUSHLINKCONNECTED,
            payload: 'API Connected' + data
        }
    },
    _disconnected: (data) => {
        return {
            type: ZTE_CBPUSHLINKDISCONNECTED,
            payload: 'API Disconected: ' + JSON.stringify(data)
        }
    }
}

const register = {
    _success: (data) => {
        return {
            type: ZTE_CBREGISTERSUCCESS,
            payload: 'Registration Success' + data
        }
    },
    _fail: (data) => {
        return {
            type: ZTE_CBREGISTERFAIL,
            payload: 'Registration Fail: ' + JSON.stringify(data)
        }
    }
}

const registerRefresh = {
    _success: (data) => {
        return {
            type: ZTE_CBREGISTERREFRESHSUCCESS,
            payload: 'Register Refresh Success' + data
        }
    },
    _fail: (data) => {
        return {
            type: ZTE_CBREGISTERREFRESHFAIL,
            payload: 'Register Refresh Fail'
        }
    }
}

const receivingEvents = {
    singleMsg: (data) => {
        return {
            type: ZTE_CBSINGLEMSGRECV,
            payload: data
        }
    },
    singleLocation: (data) => {
        return {
            type: ZTE_CBSINGLERECVLOCATION,
            payload: data
        }
    },
    multimediaMsg: (data) => {
        return{
            type: ZTE_CBSINGLEMULTMSGRECVBASE,
            payload: data
        }
    },
    statusMsgs: (data) => {
        return{
            type: ZTE_CBSINGLERECVREPORT,
            payload: data
        }
    }
}

export const initApi = (params) => {
    messageCenter = new MessageCenter(null, null, params);
    return {
        type: ZTE_CLIENTINIT,
        payload: messageCenter.clientInit
    }
}


export const getToken = (params) => dispatch => {
    dispatch({
        type: ZTE_GETTOKEN,
        payload: messageCenter.getToken(null, null, params,
            (data) => {
                dispatch(tokenRefresh._success(data));
            },
            (data) => {
                dispatch(tokenRefresh._fail(data));
            })
    });
}

export const login = () => dispatch => {

    messageCenter.login(
        (data)=>{
            dispatch(pushLink._connected(data));
        },
        (data)=>{
            dispatch(pushLink._disconnected(data));
        },
        (data)=>{
            dispatch(register._success(data));
        },
        (data)=>{
            dispatch(register._fail(data));
        },
        (data)=>{
            dispatch(registerRefresh._success(data));
        } ,
        (data)=>{
            dispatch(registerRefresh._fail(data));
        },
        {
            singleMsg: (data) => {
                dispatch(receivingEvents.singleMsg(data));
            },
            singleLocation: (data) => {
                dispatch(receivingEvents.singleLocation(data));
            },
            multimediaMsg: (data) => {
                dispatch(receivingEvents.multimediaMsg(data));
            },
            statusMsgs: (data) => {
                dispatch(receivingEvents.statusMsgs(data));
            }
        }
    );

}

export const logout = () => {
    return{
        type: ZTE_LOGOUT,
        payload: messageCenter.logout()
    }
}

export const sendSingleTextMsg = (params) => {
    return{
        type: ZTE_SENDSINGLETXTMSG,
        payload: messageCenter.sendSingleTextMsg(null,null,params)
    }
}

export const sendSingleLocationMsg = (params) => {
    return{
        type: ZTE_SENDSINGLELOCATIONMSG,
        payload: messageCenter.sendSingleLocationMsg(null,null,params)
    }
} 

export const sendSingleFile = (file,params) => {
    return{
        type: ZTE_SENDSINGLEFILE,
        payload: messageCenter.sendSingleFile(null,null,file,params)
    }
}