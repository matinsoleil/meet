import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMessage} from './../../../../../redux/actions/conversation/fetchConversation';
import AudioRecorder from './../../../../../lib/helper/audioRecorder';
import './recorderContent.scss';

class RecorderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            timer: "00:00"
        }
    }

    recordAudio = () => {
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia
        if (navigator.getUserMedia) {
            this.audioRecorder = new AudioRecorder(this.changeTimerState); 
            navigator.getUserMedia({ audio:{channelCount:1}, video:false}, this.audioRecorder.record, this.handleRecordError);
            this.setState({
                recording: true
            });
        } else if( navigator.mediaDevices.getUserMedia ){
            this.audioRecorder = new AudioRecorder(this.changeTimerState); 
            navigator.mediaDevices.getUserMedia({ audio:{channelCount: 1}, video:false})
            .then(this.audioRecorder.record)
            .catch(this.handleRecordError);
            this.setState({
                recording: true
            });
        }else{
            console.log("Browser not supported");
        }
    }

    handleRecordError = () => {

    }
    
    changeTimerState = timer => {
        (this.state.recording && this.audioRecorder) && this.setState({
            timer: timer
        });
    }

    stopRecording = (save) => {
        this.setState({
            timer: '00:00',
            recording: false,
        });
        this.audioRecorder.stop((url) => {
            console.log(url);
            //alert(url);
            let date = new Date();
            this.props.addMessage({
                "id": "15",
                "userSend": "1",
                "userGet": "2",
                "message": {
                  "type": "2",
                  "src": url
                },
                hour:`${date.getHours()}:${date.getMinutes()}`,
                status:"1"
              });
        }, save);
        this.audioRecorder = null;
    }
    render() {
        return (
            <div className={(!this.state.recording) ? "icon" : "record-content"}>
                {(this.state.recording) ?
                    <div className="controls">
                        <img onClick={
                            () => { this.stopRecording(true) }
                        } id="ok_button" src={this.props.ok_icon} alt="ok" />
                        <span id="counter" > {this.state.timer}</span>
                        <img onClick={
                            () => { this.stopRecording(false) }
                        } id="cancel_button" src={this.props.cancel_icon} alt="cancel" />
                    </div>
                    : <img onClick={this.recordAudio} src={this.props.mic} alt="" />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mic: state.customizing.Images.mic,
        ok_icon: state.customizing.Images.ok_icon,
        cancel_icon: state.customizing.Images.cancel_icon
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addMessage: message => {
            dispatch(addMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecorderContent);