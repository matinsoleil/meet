import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecorderContent from './recorderContent/recorderContent';
import $ from 'jquery'
import './footerMessagesSection.scss';

class FooterMessagesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlAudio: undefined,
        }
    }

    selectFiles = (e) => {
    }

    // recordAudio = () => {
    //     if (!navigator.getUserMedia)
    //         navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    //             navigator.mozGetUserMedia || navigator.msGetUserMedia
    //     if (navigator.getUserMedia) {
    //         this.audioRecorder = new AudioRecorder();
    //         navigator.getUserMedia({ audio: true }, this.audioRecorder.record, this.handleRecordError);
    //     } else if (navigator.mediaDevices.getUserMedia) {
    //         let p = navigator.mediaDevices.getUserMedia({ audio: true });
    //         console.log(p);
    //         p.then(this.recordStream).catch(this.handleRecordError);
    //     } else {
    //         console.log("Browser not supported");
    //     }
    // }

    // recordStream = stream => {
    //     var context = new (window.AudioContext || window.webkitAudioContext)();
    //     var source = context.createMediaStreamSource(stream);
    //     var node = undefined;
    //     var recLength = 0, bufferL = [], bufferR = [];
    //     if (!context.createScriptProcessor) {
    //         node = context.createJavaScriptNode(4096, 2, 2);
    //     } else {
    //         node = context.createScriptProcessor(4096, 2, 2);
    //     }
    //     console.log('__NODE__', node);
    //     node.onaudioprocess = (e) => {
    //         bufferL.push(e.inputBuffer.getChannelData(0));
    //         bufferR.push(e.inputBuffer.getChannelData(1));
    //         recLength += e.inputBuffer.getChannelData(0).length;
    //         console.log(recLength);
    //     }

    //     source.connect(node);
    //     node.connect(context.destination);

    //     setTimeout(() => {
    //         console.log('Stoping...');
    //         stream.getTracks().forEach(function (track) {
    //             console.log(track)
    //             track.stop();
    //         });
    //         context.close();
    //         source.disconnect(node);
    //         node.disconnect(context.destination);
    //         console.log('Stop');
    //         console.log(bufferL, bufferR);
    //         var blob = new Blob(bufferL, { 'type': 'audio/mp3; codecs=opus' });
    //         const audioUrl = URL.createObjectURL(blob);
    //         console.log(audioUrl);
    //         this.setState({
    //             urlAudio: audioUrl,
    //         })
    //         const audio = new Audio(audioUrl);
    //         console.log(audio);
    //         //audio.play();
    //     }, 6000);
    // }
    // handleRecordError = error => {

    // }

    render() {
        return (
            <footer className='footer-messages-section'>
                <div className='data-input'>
                    <div onClick={
                        () => {
                            this.audioRecorder.stop((url) => {
                                console.log(url);
                                alert(url);
                            }, true);
                        }
                    } role="button" className="icon">
                        <img src={this.props.plus} alt="" />
                    </div>
                    <div role="button" onClick={() => { $(this.fileChooser).trigger('click'); }} className="icon">
                        <img src={this.props.clip} alt="" />
                        <input onChange={this.selectFiles} ref={(input) => { this.fileChooser = input }} type="file" style={{ display: "none" }} multiple />
                    </div>
                    <div className="text-message">
                        <input type="text" placeholder="chat" name="" id="" />
                        <div className="icon emoji">
                            <img src={this.props.emoji} alt="" />
                        </div>
                    </div>
                    <RecorderContent />
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        clip: state.customizing.Images.clip,
        emoji: state.customizing.Images.emoji,
        mic: state.customizing.Images.mic,
        plus: state.customizing.Images.plus
    }
}

export default connect(mapStateToProps, null)(FooterMessagesSection);