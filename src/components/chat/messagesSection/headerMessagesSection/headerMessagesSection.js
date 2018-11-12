import React, { Component } from 'react';
import './headerMessagesSection.scss';
class headerMessagesSection extends Component {
    render() {

        console.log(this.props.contactsIds)
        return (
            <header className='header-messages-section'>
                <span className='title' >{this.props.chatName}</span>
                {this.props.contactsIds ?
                    (<div>
                        <Members members={this.props.contactsIds} />
                    </div>) :
                    (<span className='subtitle' >{this.props.label}</span>)
                }
            </header>
        );
    }
}

const Members = (props) => {
    return props.members.map(
        (member) => <span key={ member.id }> { member.name},</span>
    );
}

export default headerMessagesSection;