import React, {Component} from 'react';
import { Conversation } from "./Conversation/Conversation";
import InactiveChat from './inactiveChat/inactiveChat';
import {connect} from 'react-redux'
import './messagesSectionContainer.scss'

class MessagesSectionContainer extends Component {

    render() {
        return (
            <div className='messages-section-container'>
                { this.props.conversation ? <Conversation/> : <InactiveChat/> }
            </div>
        );
    }

}

const mapStateToProps = ({conversation}) => {
    return {
        conversation: conversation,
    }
};

export default connect(mapStateToProps, null)(MessagesSectionContainer)