import React, { Component } from 'react';
import { connect } from 'react-redux'
import './headerMessagesSection.scss';
class headerMessagesSection extends Component {
    render() {
        return (
            <header className='header-messages-section'>
                <span className='title' >{this.props.conversation.name}</span>
                {this.props.members ?
                    (<div>
                        <Members members={this.props.conversation.members} />
                    </div>) :
                    (<span className='subtitle' >{this.props.conversation.label}</span>)
                }
            </header>
        );
    }
}

const Members = (props) => {
    var cdn = ""
    var flag = ""
    return props.members.map(
        member => {
            flag == "" ? cdn = "" : cdn = ","
            flag = ","
            return <span key={member.id}>  {cdn}  {member.name}</span>
        }
    );
}

const mapStateToProps = ({ conversation }) => {
    return {
        conversation: conversation,
    }
}

export default connect(mapStateToProps, null)(headerMessagesSection)