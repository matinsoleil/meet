import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../../../../redux/actions/conversation/fetchConversation';
import RecorderContent from './recorderContent/recorderContent';
import OptionSelection from './optionsSelection/optionsSelection';
import $ from 'jquery'
import './footerMessagesSection.scss';
import MessagesHelper from '../../../../lib/helper/messagesHelper';
import GenerateId from '../../../../lib/helper/generateId';
import { multiSelectState } from '../../../../redux/actions/messagesOptions/messagesOptions';

class FooterMessagesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlAudio: undefined,
        }
        this.cancelMultiSelection = this.cancelMultiSelection.bind(this,this.props);
    }

    componentDidUpdate(){
        (this.props.multiSelect) && document.addEventListener('keyup',this.cancelMultiSelection);
        (!this.props.multiSelect) && document.removeEventListener('keyup',this.cancelMultiSelection);
    }

    cancelMultiSelection = (props,e) => {
        (e.key === 'Escape') && props.multiSelectState(false);
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
                    fileName: file.name.split('.')[0],
                    size: file.size
                },
                hour: `${date.getHours()}:${date.getMinutes()}`,
                status: "1"
            });
        }
    }
    render() {
        return (
            <footer className='footer-messages-section'>
                {
                    (!this.props.messageSelected) ?
                        <div className='data-input'>
                            <div role="button" className="icon">
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
                        </div> :
                        <OptionSelection type={MessagesHelper.getMessageById(this.props.conversation,this.props.messageSelected).message.type}/>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: message => {
            dispatch(addMessage(message));
        },
        multiSelectState: state => {
            dispatch(multiSelectState(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterMessagesSection);