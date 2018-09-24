import { ZTE_CLIENTINIT, ZTE_GETTOKEN, ZTE_CBPUSHLINKCONNECTED, ZTE_CBPUSHLINKDISCONNECTED, ZTE_CBREGISTERREFRESHSUCCESS, ZTE_CBREGISTERSUCCESS, ZTE_CBREGISTERFAIL, ZTE_CBREGISTERREFRESHFAIL, ZTE_CBSINGLEMSGRECV, ZTE_CBSINGLERECVLOCATION, ZTE_CBSINGLEMULTMSGRECVBASE, ZTE_CBSINGLERECVREPORT, ZTE_SENDSINGLETXTMSG, ZTE_SENDSINGLELOCATIONMSG, ZTE_SENDSINGLEFILE } from "../actionstypes";

export const messageCenterReducer = (state={}, action) => {
    console.log(action);
    switch(action.type){
        case ZTE_CLIENTINIT+'_FULFILLED':
            return {...state,
                apiInit: true
            }
        case ZTE_CLIENTINIT+'_REJECTED':
            return {...state,
                apiInit:false
            }
        case ZTE_GETTOKEN+'_FULFILLED':
            return {...state,
                getTokenState: true
            }
        case ZTE_GETTOKEN+'_REJECTED':
            return{...state,
                getTokenState: false
            }
        case ZTE_GETTOKEN+'_REFRESH_FAIL':
            return {...this.state,
                getTokenState: false
            }
        case ZTE_CBPUSHLINKCONNECTED: case ZTE_CBPUSHLINKDISCONNECTED:
            return {...state,
                pushlink: action.payload
            }
        case ZTE_CBREGISTERSUCCESS: case ZTE_CBREGISTERFAIL:
            return{...state,
                register:action.payload
            }
        case ZTE_CBREGISTERREFRESHSUCCESS:case ZTE_CBREGISTERREFRESHFAIL:
            return{...state,
                registerRefresh: action.payload
            }
        case ZTE_SENDSINGLETXTMSG+'_FULFILLED': case ZTE_SENDSINGLELOCATIONMSG+'_FULFILLED': case ZTE_SENDSINGLEFILE+'_FULFILLED':
            return{...state,
                messageSendedState:true
            }
        case ZTE_SENDSINGLETXTMSG+'_REJECTED': case ZTE_SENDSINGLELOCATIONMSG+'_REJECTED': case ZTE_SENDSINGLEFILE+'_REJECTED':
            return{...state,
                messageSendedState:false
            }
        case ZTE_CBSINGLEMSGRECV: case ZTE_CBSINGLERECVLOCATION: case ZTE_CBSINGLEMULTMSGRECVBASE: case ZTE_CBSINGLERECVREPORT:
            return{...state,
                message: action.payload
            }
        default:
            return state;
    }
}