import React, {Component} from 'react';
import TimeFromNow from './TimeFromNow';
import {connect} from 'react-redux';
import {Images} from "../../../redux/states/images";
import DropMenu from "../../utils/dropMenu";
import './ConversationItem.scss';
import ControlMenuHelper from '../../../lib/helper/controlMenu';

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
                        onClick={() => this.toggleMenu(!this.state.isMenuOpened)}
                        container={this.row}
                        optionsMenu={this.optionsMenu}
                    />
                }

            </li>
        );
    }

    //TODO: move this to a helper
    setOptionsMenu(options = null){
        if(options) return this.optionsMenu = options;

        const extraOptions = {
            removeChatHistory: ControlMenuHelper.removeChatHistory(this.props.conversation),
            goOutOfGroup: ControlMenuHelper.goOutOfGroup(this.props.conversation),
            removeChat: ControlMenuHelper.removeChat(this.props.conversation)
        };

        this.optionsMenu = [
            ControlMenuHelper.toggleStoreConversation(this.props.conversation),
            ControlMenuHelper.toggleSilenceConversation(this.props.conversation),
            ControlMenuHelper.togglePinConversation(this.props.conversation),
            ControlMenuHelper.toggleReadConversationStatus(this.props.conversation)
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

export default connect(mapStateToProps, null)(ConversationItem);