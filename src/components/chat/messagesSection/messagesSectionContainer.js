import React, { Component } from 'react';
import HeaderMessagesSection from './headerMessagesSection/headerMessagesSection';
import FooterMessagesSection from './footerMessagesSection/footerMessagesSection';
import { addConversation } from '../../../redux/actions/conversation/conversation'
import ChatGeneralConversationContact from './chatGeneralConversationContact/ChatGeneralConversationContact';
import InactiveChat from './inactiveChat/inactiveChat';
import { connect } from 'react-redux'
import './messagesSectionContainer.scss'
class MessagesSectionContainer extends Component {
    
    componentDidMount(){
        const conversationTest = {
            id: 3,
            name: "stylopm ",
            label: "label grupo stylopm",
            members: [{ id: 1, name: 'Jose' }, { id: 2, name: 'Juan' }],
            conversation: [],
            type: "basic",
        };
        this.props.addConversation(conversationTest);
    }
    
    
    render() {
        return (
            <div className='messages-section-container' >
                {this.props.conversation ? (
                    <React.Fragment>
                        <HeaderMessagesSection/>
                        <ChatGeneralConversationContact/>
                        {/* <FooterMessagesSection /> */}
                    </React.Fragment>

                    // <ActiveChat
                    //     label={this.props.conversation.label}
                    //     members= { this.props.conversation.members }
                    //     chatName={this.props.conversation.name}
                    //     chat={[]}
                    //     contacts={[]}
                    //     contact={this.props.conversation}
                    //     server={this.props.server}
                    // />
                ) : (
                        <InactiveChat />
                    )}
            </div>
        );
    }
}

const ActiveChat = (props) => {
    return (
        <React.Fragment>
            <HeaderMessagesSection/>
            <ChatGeneralConversationContact/>
            <FooterMessagesSection />
            {/* <ChatGeneralConversationContact contact={props.conversation} contacts={props.contacts} chat=[{props.chat}] />
            <FooterMessagesSection serverChat={props.server} /> */}
        </React.Fragment>
    );
}

const mapStateToProps = ({ user, conversation}) => {
    return {
        user: user,
        conversation: conversation,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addConversation: (conversationsss) => {
            dispatch(addConversation(conversationsss))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesSectionContainer)