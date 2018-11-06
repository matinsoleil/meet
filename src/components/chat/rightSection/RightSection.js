import React, { Component } from 'react';
import GroupSectionContainer from '../../../components/chat/groupSection/GroupSectionContainer'
import './RightSection.scss'

class RightSection extends Component {
    render() {
        return (
            <div className="right-section-container">
                <GroupSectionContainer />
            </div>
        );
    }
}

export default RightSection;