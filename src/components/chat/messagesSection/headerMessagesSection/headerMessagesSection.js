import React, { Component } from 'react';
import './headerMessagesSection.scss';
class headerMessagesSection extends Component {
    render() {
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
    var cdn = ""
    var flag = ""
     return props.members.map(
        member => {
            flag === "" ? cdn = "" : cdn = "," 
            flag = ","
            return <span key= { member.id }>  {cdn}  { member.name}</span>
        }
    );
}

export default headerMessagesSection;