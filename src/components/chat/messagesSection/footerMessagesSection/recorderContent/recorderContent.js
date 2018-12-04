import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../../../../../redux/actions/messages/messages';
import AudioRecorder from './../../../../../lib/helper/audioRecorder';
import './recorderContent.scss';
import GenerateId from '../../../../../lib/helper/generateId';
import ModalBox from '../../../../modals/ModalBox';
import { showModal,View } from '../../../../../redux/actions/modalBox/modalBox';

class RecorderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            timer: "00:00",
            showInfoBox: false,
            showModal: false,
        }

    }
    componentDidMount() {
        this.recordAudio();
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    permissions = async (nav) => {
        let status = false;
        await nav.mediaDevices.enumerateDevices().then((devices) => {
            for (let device of devices) {
                if (device.kind === 'audioinput'
                    && device.label !== '') {
                    status = true;
                    break;
                }
            }
        });
        return status;
    }

    recordAudio = async () => {

        this.props.toggleOptions();
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia
        if (navigator.getUserMedia) {
            let status = await this.permissions(navigator);
            (!status) && this.setState({ showInfoBox: true });
            this.audioRecorder = new AudioRecorder(this.changeTimerState, () => { this.setState({ showInfoBox: false }) });
            navigator.getUserMedia({ audio: { channelCount: 1 }, video: false }, this.audioRecorder.record, this.handleRecordError);
            this.setState({
                recording: true
            });
        } else if (navigator.mediaDevices.getUserMedia) {
            let status = await this.permissions(navigator);
            (!status) && this.setState({ showInfoBox: true });
            this.audioRecorder = new AudioRecorder(this.changeTimerState, () => { this.setState({ showInfoBox: false }) });
            this.nav = navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1 }, video: false });
            this.nav.then(this.audioRecorder.record)
            this.nav.catch(this.handleRecordError);
            this.setState({
                recording: true
            });
        } else {
            console.log("Browser not supported");
        }
    }

    handleRecordError = (e) => {
        alert('Here error get USER MEDIA');
        this.setState({ showInfoBox: false });
        this.props.hide();
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
            this.props.addMessage(this.props.conversation.id, {
                "id": GenerateId.generate(),
                sender: this.props.user.id,
                "message": {
                    "type": "2",
                    "src": url
                },
                hour: `${date.getHours()}:${date.getMinutes()}`,
                status: "1"
            });
        }, save);
        this.props.toggleOptions();
        this.props.hide();
        this.audioRecorder = null;
    }
    render() {
        return (
            <div className={"record-content"}>
                <div className="controls">
                    <img onClick={
                        () => { this.audioRecorder.pause(); this.props.showModal(
                            `¿Seguro que desea eliminar este chat de voz?`,
                            [{name:'Cancelar',action:this.audioRecorder.resume},
                                {name:'Eliminar',action:()=>{this.stopRecording(false)}}],
                            View.CONFIRM
                        )}
                    } id="cancel_button" src={this.props.trash_red} alt="cancel" />
                    <div className='outside-circle'>
                        <div className='inside-circle'>
                            <span id="counter" > {this.state.timer}</span>
                        </div>
                    </div>
                    <img onClick={
                        () => { this.stopRecording(true) }
                    } id="send_button" src={this.props.send_icon} alt="send" />
                </div>
                {(this.state.showInfoBox) &&
                    <InfoBox
                        img={this.props.mic}
                        title={"Permitir Micrófono"}
                        data={"Para grabar un chat de voz, haz click en 'Permitir' para conceder a Claro connect acceso al micrófono de tu computadora"}
                    />}
                {(this.state.showModal) &&
                    <ModalBox
                        body={
                            <div className="modal-content">
                                <div className='title'>{'¿Seguro que desea eliminar este chat de voz?'}</div>
                                <div className='button-section'>
                                    <button onClick={() => { this.audioRecorder.resume(); this.toggleModal(); }}>Cancelar</button>
                                    <button onClick={() => { this.stopRecording(false); this.toggleModal(); }}>Eliminar</button>
                                </div>
                            </div>
                        }

                    />
                }
            </div>
        );
    }
}

const InfoBox = props => {
    return (
        <div className="info-box">
            <div className="info-box-content">
                <img src={props.img} alt="" />
                <span className="info-box-title">{props.title}</span>
                <div className="info-box-data">{props.data}</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mic: state.customizing.Images.mic,
        ok_icon: state.customizing.Images.ok_icon,
        cancel_icon: state.customizing.Images.cancel_icon,
        trash_red: state.customizing.Images.trash_red,
        send_icon: state.customizing.Images.send_icon,
        user: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (conversationId, message) => {
            dispatch(addMessage(conversationId, message));
        },
        showModal: (title,buttons,viewPath) => {
            dispatch(showModal(title,buttons,viewPath));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecorderContent);