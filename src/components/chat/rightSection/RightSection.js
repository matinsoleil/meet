import React, { Component } from 'react';
import GroupSectionContainer from '../../../components/chat/groupSection/GroupSectionContainer'
import './RightSection.scss'

class RightSection extends Component {
    render() {
        switch (this.props.showSection) {
            case 'GroupSectionContainer':
                return (
                    <div className="right-section-container">
                        <GroupSectionContainer />
                    </div>
                );
            default:
                break;
        }
    }
}

export default RightSection;