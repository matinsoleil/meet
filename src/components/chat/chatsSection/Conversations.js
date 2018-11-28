import React, {Component} from 'react';
import ConversationItem from './ConversationItem'
import {connect} from 'react-redux';

class Conversations extends Component {

    constructor(props) {
        super(props);
        this.timeToAutoupdate = 0.3 * 1000;
    }

    componentWillUnmount() {
        clearInterval(this.autoUpdateConversationsInterval);
    }

    componentDidUpdate() {
        clearInterval(this.autoUpdateConversationsInterval);
    }

    render() {
        this.autoUpdateConversationsDate();
        return (
            <div className="main-chat-general-list-contact">
                {this.getSortedConversations().map(
                    conversation => <ConversationItem conversation={conversation} key={conversation.id}/>)}
            </div>
        );
    }

    /**
     * Retrieve the ConversationItems array sorted by the UX conditions
     */
    getSortedConversations() {
        let pinned = [], unpinned = [];
        this.props.conversations.forEach(o => o.pinned ? pinned.push(o) : unpinned.push(o));
        return this.sortConversationsByTime(pinned).concat(this.sortConversationsByTime(unpinned));
    }

    /**
     * Retrieve an array of Conversations ordered by the lastMessageDate attr
     * @param conversations
     */
    sortConversationsByTime(conversations) {
        if (!conversations.length) return conversations;
        return conversations.sort(function (a, b) {
            return new Date(b.lastMessageDate) - new Date(a.lastMessageDate);
        });
    }

    autoUpdateConversationsDate() {
        console.log(this.timeToAutoupdate)

        this.autoUpdateConversationsInterval = setInterval(() => {
            this.forceUpdate();
        }, this.timeToAutoupdate);
    }
}


const mapStateToProps = ({conversations}) => {
    return {
        conversations,
    };
};

export default connect(mapStateToProps, null)(Conversations);