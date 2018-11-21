import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createNewGroup } from '../../../redux/actions/groups/groups';
import hideSectionRight from '../../../redux/actions/rightSection/hideSectionRight';
import RightSideContactList from '../../../components/chat/groupSection/RightSideContactList'
import './RightSection.scss';

class RightSection extends Component {

    constructor(props){
        super(props);
        this.state = {
            View: undefined,
        }
    }

    componentDidMount(){

    } 

    render() {
        return (
            <div className="right-section-container">
                <RightSideContactList action={this.props.createNewGroup}/>
            </div>
        );
    }

}
export default connect(null,dispatch=>({
    createNewGroup: (newConversation,newGroupElement) =>{
        dispatch(createNewGroup(newConversation,newGroupElement));
        dispatch(hideSectionRight());
    },
}))(RightSection);