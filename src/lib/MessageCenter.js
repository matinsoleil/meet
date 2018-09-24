import ICenterSDK from 'ICenterSDK'
import FileSlicer from './FileSlicer'
import {Config} from './../redux/config';

/**
 * @class {MessageCenter} Connection to "SDK" ZTE
 */
export default class MessageCenter {
    /**
     * 
     * @param {()=>void} initHandleSuccess 
     * @param {(error)=>void} initHandleFail 
     * @param {Object} params 
     *      @param {string} params.loginSeverurl
     *      @param {string} params.sdkapiVersion
     *      @param {string} params.appid
     *      @param {string} params.refreshRegister
     *      @param {string} params.iamServerurl
     *      @param {string} params.iamapiVersion
     *      @param {string} params.fileServerurl
     */
    constructor(initHandleSuccess, initHandleFail, params = {
        loginSeverurl: Config.ICenterSDK.loginServerurl,
        sdkapiVersion: Config.ICenterSDK.sdkapiVersion,
        appid: Config.ICenterSDK.appid,
        refreshRegister: Config.ICenterSDK.refreshRegister,
        iamServerurl: Config.ICenterSDK.iamServerurl,
        iamapiVersion: Config.ICenterSDK.iamapiVersion,
        fileServerurl: Config.ICenterSDK.fileServerurl
    }) {
        this.icenter = new ICenterSDK();
        this.clientInit = this.icenter.zte_ClientInit(params);
        (initHandleSuccess) && this.clientInit.onSuccess(initHandleSuccess);
        (initHandleFail) && this.clientInit.onFail(initHandleFail);
    }

    /**
     * 
     * @param {()=>void} onSuccess 
     * @param {(error)=>void} onFail 
     * @param {Object} params
     *    @param {string} params.granttype - like 'personal'
     *    @param {string} params.username - phone Numbre
     *    @param {string} params.password - user password
     *    @param {string} params.terminaltype - 'WEB'
     * @returns {Promise} zte_Gettoken
     */
    getToken(onSuccess, onFail, params, refreshSuccess, refreshFail) {
        params.granttype = 'personal';
        params.terminaltype = 'WEB';
        this.token = this.icenter.zte_Gettoken(params);
        (onSuccess) && this.token.onSuccess(onSuccess);
        (onFail) && this.token.onFail(onFail);

        (refreshSuccess) &&
            this.icenter.on(ICenterSDK.Event.zte_CBTokenRefreshSuccess
                , refreshSuccess);
        (refreshFail) &&
            this.icenter.on(ICenterSDK.Event.zte_CBTokenRefreshFail
                , refreshFail);

        return this.token;
    }

    /**
     * 
     * @param {(data)=>void} pushLinkConnectedHandle 
     * @param {(data)=>void} pushLinkDisconnectedHandle 
     * @param {(data)=>void} registerSuccessHandle 
     * @param {(data)=>void} registerFailHandle 
     * @param {(data)=>void} registerRefreshSuccess 
     * @param {(data)=>void} registerRefreshFail 
     * @param {Object} receivingEvents
     *    @param {(data)=>void} receivingEvent.singleMsg
     *    @param {(data)=>void} receivingEvent.singleLocation
     *    @param {(data)=>void} receivingEvent.multimediaMsg
     *    @param {(data)=>void} receivingEvent.statusMsgs
     */
    login(pushLinkConnectedHandle, pushLinkDisconnectedHandle, registerSuccessHandle, registerFailHandle, registerRefreshSuccess, registerRefreshFail, receivingEvents) {
        this.icenter.zte_RegisterLogin({});
        this.icenter.on(ICenterSDK.Event.zte_CBPushLinkConnected, pushLinkConnectedHandle);
        this.icenter.on(ICenterSDK.Event.zte_CBPushLinkDisconnected, pushLinkDisconnectedHandle);
        this.icenter.on(ICenterSDK.Event.zte_CBRegisterSuccess, registerSuccessHandle);
        this.icenter.on(ICenterSDK.Event.zte_CBRegisterFail, registerFailHandle);
        this.icenter.on(ICenterSDK.Event.zte_CBRegisterRefreshSuccess, registerRefreshSuccess);
        this.icenter.on(ICenterSDK.Event.zte_CBRegisterRefreshFail, registerRefreshFail);

        /*Receiving Event*/

        //Text Message
        (receivingEvents.singleMsg) &&
            this.icenter.on(ICenterSDK.Event.zte_CBSingleMsgRecv,
                receivingEvents.singleMsg);
        //Location Message
        (receivingEvents.singleLocation) &&
            this.icenter.on(ICenterSDK.Event.zte_CBSingleRecvLocation,
                receivingEvents.singleLocation);
        //Multimedia Message
        (receivingEvents.multimediaMsg) &&
            this.icenter.on(ICenterSDK.Event.zte_CBSingleMultMsgRecvBase,
                receivingEvents.multimediaMsg);
        //Status of Messages
        (receivingEvents.statusMsgs) &&
            this.icenter.on(ICenterSDK.zte_CBSingleRecvReport,
                receivingEvents.statusMsgs);

    }

    /**
     * 
     * @param {()=>void} successHandle 
     * @param {(data)=>void} failHandle
     * @returns {Promise} zte_RegisterLogout
     */
    logout(successHandle, failHandle) {
        this.logout = this.icenter.zte_RegisterLogout();
        (successHandle) && this.logout.onSuccess(successHandle);
        (failHandle) && this.logout.onFail(failHandle);
        return this.logout;
    }

    /**
     * 
     * @param {(messageId)=>void} successHandle 
     * @param {(data)=>void} failHandle 
     * @param {Object} params
     *    @param {string} params.destaddress
     *    @param {string} params.textmsg
     */
    sendSingleTextMsg(successHandle, failHandle, params) {
        var messagePromise = this.icenter.zte_SingleTextMsgSend(params);
        (successHandle) && messagePromise.onSuccess(successHandle);
        (failHandle) && messagePromise.onFail(failHandle);
        return messagePromise;
    }

    /**
     * 
     * @param {(messageId)=>void} successHandle 
     * @param {(data)=>void} failHandle 
     * @param {Object} params
     *    @param {string} params.destaddress
     *    @param {string} params.locationdesc - Location description
     *    @param {string} params.longitude
     *    @param {string} params.latitude
     *    @param {string} params.radius
     */
    sendSingleLocationMsg(successHandle, failHandle, params) {
        var singleLocationMsg = this.icenter.zte_SingleLocationMsgSend(params);
        (successHandle) && singleLocationMsg.onSuccess(successHandle);
        (failHandle) && singleLocationMsg.onFail(failHandle);
        return singleLocationMsg;
    }

    /**
     * 
     * @param {()=>void} successHandle 
     * @param {(error)=>void} failHandle 
     * @param {File} file 
     * @param {Object} params 
     *    @param {string} params.destaddress
     *    @param {string} params.thumbfilename
     *    @param {string} params.thumbdata
     */
    sendSingleFile(successHandle, failHandle, file, params) {
        params.file = file;
        params.filedata = new FileSlicer(file, (1024 * 1024)).filedata;
        params.dispositon = "0";
        var singleFile = this.icenter.zte_SingleMultiMsgSend(params);
        (successHandle) && singleFile.onSuccess(successHandle);
        (failHandle) && singleFile.onFail(failHandle);
    }







}