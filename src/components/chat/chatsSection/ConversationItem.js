import React, {Component} from 'react';
import TimeFromNow from './TimeFromNow';
import {connect} from 'react-redux';
import {Images} from "../../../redux/states/images";
import {updateConversations, removeConversations} from "../../../redux/actions/conversations/conversations";
import './ConversationItem.scss';

const conversationTypes = {
    basic: 'basic',
    group: 'group'
};

class ConversationItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false
        };
        this.setOptionsMenu();
    }

    componentDidUpdate() {
        this.setOptionsMenu();
    }

    render() {
        const OptionsMenu = this.optionsMenu.map(
            (option, key) => (
                <a key={key} onClick={option.clickHandler}>{option.text}</a>
            )
        );
        return (
            <li className='conversation-item' onMouseLeave={() => this.toggleMenu(false)}>

                <div className="image">
                    <img src={this.props.conversation.image || Images.avatar} alt="Conversation Image"/>
                    {true && <div className="connection-status"></div>}
                </div>

                <div className="content">

                    <div className="top-content">
                        <div className="name">{this.props.conversation.name}</div>
                        <div className="icon-info">
                            {this.props.conversation.pinned && <img src={Images.status_user_attach_icon} alt="Pinned" className="icon"/>}
                            {this.props.conversation.mutted && <img src={Images.mute_a_icon} alt="Mutted" className="icon"/>}
                            {this.props.conversation.stored && <img src={Images.file_icon_chat} alt="Stored" className="icon"/>}
                        </div>
                        <div className="last-message-date">
                            <TimeFromNow date={ parseInt(this.props.conversation.lastMessageDate) }/>
                        </div>
                    </div>

                    <div className="bottom-content">

                        <div className="last-message">{this.props.conversation.lastMessage}</div>

                        {this.props.conversation.unreadMessages.status &&
                        <div className="unread-messages">{this.props.conversation.unreadMessages.messages}</div>
                        }

                    </div>

                </div>

                <div className="options" onClick={() => this.toggleMenu(!this.state.isMenuOpened)}>
                    <img src={Images.dots_menu} alt="Options"/>
                </div>

                {
                    this.state.isMenuOpened &&
                    <div className="dropdown-content" onClick={() => this.toggleMenu(!this.state.isMenuOpened)}>
                        {OptionsMenu}
                    </div>
                }

            </li>
        );
    }

    setOptionsMenu(options = null){

        if(options) return this.optionsMenu = options;

        const extraOptions = {
            removeChatHistory: {
                text: this.props.translator.t('REMOVE_CHAT_HISTORY'),
                clickHandler: null
            },
            goOutOfGroup: {
                text: this.props.translator.t('GO_OUT_OF_GROUP'),
                clickHandler: () => this.props.updateConversations(
                    [{...this.props.conversation, banned: true}]
                )
            },
            removeChat: {
                text: this.props.translator.t('REMOVE_CHAT'),
                clickHandler: () => this.props.removeConversations([this.props.conversation])
            }
        };

        this.optionsMenu = [
            {
                text: this.props.conversation.stored ?
                    this.props.translator.t('REMOVE_CHAT_FROM_STORE') : this.props.translator.t('STORE_CHAT'),
                clickHandler: () => this.props.updateConversations(
                    [{...this.props.conversation, stored: !this.props.conversation.stored}]
                )
            },
            {
                text: this.props.conversation.mutted ?
                    this.props.translator.t('REMOVE_CHAT_SILENCE') : this.props.translator.t('SILENCE_CHAT'),

                clickHandler: () => this.props.updateConversations(
                    [{...this.props.conversation, mutted: !this.props.conversation.mutted}]
                )
            },
            {
                text: this.props.conversation.pinned ?
                    this.props.translator.t('REMOVE_CHAT_PIN') : this.props.translator.t('ADD_CHAT_PIN'),
                clickHandler: () => this.props.updateConversations(
                    [{...this.props.conversation, pinned: !this.props.conversation.pinned}]
                )
            },
            {
                text: !this.props.conversation.unreadMessages.status ?
                    this.props.translator.t('MARK_AS_UNREADED') : this.props.translator.t('MARK_AS_READED'),
                clickHandler: () => this.props.updateConversations(
                    [{...this.props.conversation, unreadMessages: {
                            status: !this.props.conversation.unreadMessages.status,
                            messages: null
                    }}]
                )
            }
        ];
        //TODO: verify if this conversation is selected
        switch (this.props.conversation.type) {
            case conversationTypes.group:
                if(this.props.conversation.banned){
                    this.optionsMenu = [ ...this.optionsMenu, extraOptions.removeChat ];
                }else{
                    this.optionsMenu = [ ...this.optionsMenu, extraOptions.goOutOfGroup ];
                }
                break;
            default: // basic
                this.optionsMenu = [ ...this.optionsMenu, extraOptions.removeChat ];
        }

    }

    toggleMenu(status) {
        this.setState({isMenuOpened: status});
    }

}

const mapStateToProps = ({country}) => {
    return {
        translator: country.translator
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateConversations: payload => dispatch(updateConversations(payload)),
        removeConversations: payload => dispatch(removeConversations(payload))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConversationItem);