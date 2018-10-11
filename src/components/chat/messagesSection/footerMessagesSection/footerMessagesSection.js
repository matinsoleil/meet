import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMessage} from './../../../../redux/actions/conversation/fetchConversation';
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
        for(let file of this.fileChooser.files){
            let date = new Date();
            this.props.addMessage({
                id:"1",
                userSend:"1",
                userGet:"2",
                message: {
                    type:"3",
                    fileName:file.name.split('.')[0],
                    size:file.size
                },
                hour:`${date.getHours()}:${date.getMinutes()}`,
                status:"1"
            });
        }
    }
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

const mapDispatchToProps = dispatch => {
    return{
        addMessage: message => {
            dispatch(addMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterMessagesSection);