import React, { Component } from 'react';
import './headerMessagesSection.scss';
class headerMessagesSection extends Component {
    render() {
        return (
            <header className='header-messages-section'>
                <span className='title' >{this.props.chatName}</span>
                {this.props.label.lenght ?
                    (<div>
                        <Members members={this.props.label} />
                    </div>) :
                    (<span className='subtitle' >{this.props.label}</span>)
                }
            </header>
        );
    }
}

const Members = (props) => {
    props.members.map(
        (member, key) => <span key={key}>{member} ,</span>
    );
}

export default headerMessagesSection;