import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../../../../redux/actions/conversation/fetchConversation';
import { multiSelectState, messageSelected } from '../../../../redux/actions/messagesOptions/messagesOptions';
import RecorderContent from './recorderContent/recorderContent';
import OptionSelection from './optionsSelection/optionsSelection';
import MessagesHelper from '../../../../lib/helper/messagesHelper';
import GenerateId from '../../../../lib/helper/generateId';
import ReplyOptions from './replyOptions/replyOptions';
import $ from 'jquery'
import './footerMessagesSection.scss';

class FooterMessagesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiState: true,
            textInputState: true,
            clipState: true,
            plusState: true,
            messageToReply: ""
        }
    }

    componentDidUpdate() {
        (this.state.inputText) && document.addEventListener('keyup', this.keyUpSendMessage);
        (!this.state.inputText) && document.removeEventListener('keyup', this.keyUpSendMessage);
        (this.props.multiSelect || this.props.messageSelected) && document.addEventListener('keyup', this.cancelMultiSelection);
        (!this.props.multiSelect && !this.props.messageSelected) && document.removeEventListener('keyup', this.cancelMultiSelection);
    }

    toggleOptions = () => {
        this.setState({
            emojiState: !this.state.emojiState,
            textInputState: !this.state.textInputState,
            clipState: !this.state.clipState,
            plusState: !this.state.plusState,
            inputText: false
        });
    }

    cancelMultiSelection = (e) => {
        (e.key === 'Escape') && this.props.multiSelectState(false);
    }

    keyUpSendMessage = (e) => {
        (e.key === 'Enter') && this.sendMessage(this.inputText.value);
    }

    selectFiles = (e) => {
        for (let file of this.fileChooser.files) {
            let date = new Date();
            this.props.addMessage({
                id: GenerateId.generate(),
                userSend: "1",
                userGet: "2",
                message: {
                    type: "3",
                    blobURL:URL.createObjectURL(file),
                    fileName: file.name,
                    size: file.size
                },
                hour: `${date.getHours()}:${date.getMinutes()}`,
                status: "1"
            });
        }
        this.scrollDown();
    }

    sendMessage = (message) => {
        let date = new Date();
        this.props.addMessage({
            id: GenerateId.generate(),
            userSend: "1",
            userGet: "2",
            message: (this.props.messageSelected && !this.props.multiSelect) ? {
                toWhoReply:this.state.senderId,
                type:"4",
                toReply: this.state.messageToReply,
                message: message
            } : message,
            hour: `${date.getHours()}:${date.getMinutes()}`,
            status: "1",
        });
        this.inputText.value = '';
        this.setState({ inputText: false });
        this.props.cancelReply('',true);
        this.scrollDown();
    }

    scrollDown = () => {
        const chat_feed = document.getElementById("#main-chat-feed");
        //console.log(chat_feed.scrollHeight);
        chat_feed.scrollTop = chat_feed.scrollHeight;
    }

    setMessageToReply = (message,senderId) => {
        this.setState({
            messageToReply:message,
            senderId:senderId
        });
    }

    render() {
        return (
            <footer className='footer-messages-section'>
                {(this.props.messageSelected && !this.props.multiSelect) &&
                    <div className='hideable-holder'>
                        <ReplyOptions setMessage={this.setMessageToReply} messageObject={MessagesHelper.getMessageById(this.props.conversation, this.props.messageSelected) }/>
                    </div>
                }
                {
                    (this.props.messageSelected && this.props.multiSelect) ?
                        <OptionSelection
                            type={
                                MessagesHelper.getMessageById(this.props.conversation, this.props.messageSelected).message.type
                            } /> :
                        <div className='data-input'>
                            <div role="button" className="icon">
                                <img src={this.props.plus} alt="" />
                            </div>
                            <div role="button" onClick={() => { (this.state.clipState) && $(this.fileChooser).trigger('click'); }} className="icon">
                                <img src={this.props.clip} alt="" />
                                <input onChange={this.selectFiles} ref={(input) => { this.fileChooser = input }} type="file" style={{ display: "none" }} multiple />
                            </div>
                            <div className="text-message">
                                <input ref={input => { this.inputText = input }} onChange={e => { this.setState({ inputText: (e.target.value.length > 0) }) }} disabled={!this.state.textInputState} type="text" placeholder="chat" name="" id="" />
                                <div className="icon emoji">
                                    <img src={this.props.emoji} alt="" />
                                </div>
                            </div>
                            {(this.state.inputText) ?
                                <div onClick={() => { this.sendMessage(this.inputText.value) }} role="button" className="icon">
                                    <img src={this.props.send_icon} alt="" />
                                </div> :
                                <RecorderContent toggleOptions={this.toggleOptions} />
                            }
                        </div>
                }
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        clip: state.customizing.Images.clip,
        emoji: state.customizing.Images.emoji,
        mic: state.customizing.Images.mic,
        plus: state.customizing.Images.plus,
        conversation: state.conversation,
        messageSelected: state.messagesOptions.messageSelected,
        multiSelect: state.messagesOptions.multiSelect,
        send_icon: state.customizing.Images.send_icon,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: message => {
            dispatch(addMessage(message));
        },
        multiSelectState: state => {
            dispatch(multiSelectState(state));
        },
        cancelReply: (messageId,state) =>{
            dispatch(messageSelected(messageId,state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterMessagesSection);