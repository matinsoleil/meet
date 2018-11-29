import UserData from './UserData';
import CreateConversationBar from './CreateConversationBar';
import Conversations from './Conversations'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import './ControlSectionContainer.scss'

class ControlSectionContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contacts-section-container">
                <UserData/>
                <CreateConversationBar/>
                <Conversations/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users,
    }
}

export default connect(mapStateToProps, null)(ControlSectionContainer)