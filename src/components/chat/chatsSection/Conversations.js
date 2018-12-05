import React, {Component} from 'react';
import ConversationItem from './ConversationItem'
import {connect} from 'react-redux';
import {updateTimeFromNow} from "../../../redux/actions/views/timeFromNow";
import {addConversation} from "../../../redux/actions/conversation/conversation";
import {ModalContainer} from "../../modals/ModalContainer";

class Conversations extends Component {

    constructor(props) {
        super(props);
        this.timeToAutoupdate = 30 * 1000;
    }

    componentWillUnmount() {
        clearInterval(this.autoUpdateConversationsInterval);
    }

    componentDidUpdate() {
        clearInterval(this.autoUpdateConversationsInterval);
    }

    filterList(){
        let result = this.props.conversations.filter(e=>{
            return (e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())>-1);
        });
        result = this.getSortedConversations(result);
        return result;
    }

    render() {
        const filteredConversations = (this.props.filter)?this.filterList():this.getSortedConversations(this.props.conversations);
        this.autoUpdateConversationsDate();
        return (
            <React.Fragment>
                <div className="main-chat-general-list-contact">
                    {filteredConversations.map(
                        conversation => <ConversationItem conversation={conversation} key={conversation.id} clickItemHandler={() => this.props.openConversation(conversation)}/>)}
                </div>
                <ModalContainer/>
            </React.Fragment>
        );
    }
//TODO: Separate logic part
    /**
     * Retrieve the ConversationItems array sorted by the UX conditions
     */
    getSortedConversations(conversations) {
        let pinned = [], unpinned = [];
        conversations.forEach(o => o.pinned ? pinned.push(o) : unpinned.push(o));
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

    /**
     * Fires a dispatch to update elements on the list without rerender all components inside it
     */
    autoUpdateConversationsDate() {
        this.autoUpdateConversationsInterval = setInterval(() => {
            this.props.updateTimeFromNow();
        }, this.timeToAutoupdate);
    }
}

const mapStateToProps = ({conversations,views}) => {
    return {
        conversations,
        filter:views.controlSection.filter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTimeFromNow: (payload = {shouldUpdate: true}) => dispatch(updateTimeFromNow(payload)),
        openConversation: payload => dispatch(addConversation(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);