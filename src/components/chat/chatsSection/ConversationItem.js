import React, {Component} from 'react';
import TimeFromNow from './TimeFromNow';
import {connect} from 'react-redux';
import {Images} from "../../../redux/states/images";
import DropMenu from "../../utils/dropMenu";
import './ConversationItem.scss';
import ControlMenuHelper from '../../../lib/helper/controlMenu';
import {addConversation} from "../../../redux/actions/conversation/conversation";

const conversationTypes = {
    basic: 'basic',
    group: 'group'
};

const selectors = {
    itemExceptDropdown: 'div:not(.options)'
};

class ConversationItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isMenuOpened: false };
    }

    componentDidMount () {
        this.addClickOnItemHandler();
    }

    componentWillUnmount () {
        this.removeClickOnItemHandler();
    }

    render() {
        return (
            <li ref={li => this.row = li} className='conversation-item' onMouseLeave={() => this.toggleMenu(false)}>

                <div className="image">
                    <img src={this.props.conversation.image || Images.avatar} alt="Conversation Image"/>
                    {true && <div className="connection-status"></div>}
                </div>

                <div className="content">

                    <div className="top-content">
                        <div className="name">{this.props.conversation.name}</div>
                        <div className="icon-info">
                            {this.props.conversation.pinned && <img src={Images.status_user_attach_icon} alt="Pinned" className="icon"/>}
                            {this.props.conversation.mutted.status && <img src={Images.mute_a_icon} alt="Mutted" className="icon"/>}
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
                    <DropMenu
                        clickHandler={() => this.toggleMenu(!this.state.isMenuOpened)}
                        container={this.row}
                        optionsMenu={this.makeOptionsMenu()}
                    />
                }

            </li>
        );
    }

    makeOptionsMenu(options = null){
        if(options) return options;

        const extraOptions = {
            removeChatHistory: ControlMenuHelper.removeChatHistory(this.props.conversation),
            goOutOfGroup: ControlMenuHelper.goOutOfGroup(this.props.conversation),
            removeChat: ControlMenuHelper.removeChat(this.props.conversation)
        };

        let optionsMenu = [
            ControlMenuHelper.toggleStoreConversation(this.props.conversation),
            ControlMenuHelper.toggleSilenceConversation(this.props.conversation),
            ControlMenuHelper.togglePinConversation(this.props.conversation),
            ControlMenuHelper.toggleReadConversationStatus(this.props.conversation)
        ];

        if(this.props.conversation.id === (this.props.openedConversation || {}).id){
            optionsMenu = [ ...optionsMenu, extraOptions.removeChatHistory ];
        }

        switch (this.props.conversation.type) {
            case conversationTypes.group:
                optionsMenu = [
                    ...optionsMenu,
                    this.props.conversation.banned ? extraOptions.removeChat : extraOptions.goOutOfGroup
                ];
                break;
            default: // basic
                optionsMenu = [ ...optionsMenu, extraOptions.removeChat ];
        }

        return optionsMenu;
    }

    toggleMenu(status) {
        this.setState({isMenuOpened: status});
    }

    addClickOnItemHandler () {
        this.row.querySelectorAll(selectors.itemExceptDropdown).forEach(elem => elem.addEventListener(
            'click', () => this.props.openConversation(this.props.conversation)
        ));
    }

    removeClickOnItemHandler () {
        this.row.querySelectorAll(selectors.itemExceptDropdown).forEach(elem => elem.removeEventListener(
            'click', () => this.props.openConversation(this.props.conversation)
        ));
    }

}

const mapStateToProps = ({country, conversation}) => {
    return {
        translator: country.translator,
        openedConversation: conversation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openConversation: payload => dispatch(addConversation(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationItem);