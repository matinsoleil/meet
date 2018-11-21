import React, { Component } from 'react';
import RightSideContactList from './RightSideContactList/RightSideContactList';
import { connect } from 'react-redux';
import { createNewGroup } from '../../../redux/actions/groups/groups';
import hideSectionRight from '../../../redux/actions/rightSection/hideSectionRight';
import './RightSection.scss';

class RightSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            View: undefined,
        }
    }

    componentWillMount() {
        (this.props.type)&&import('./'+this.props.type).then(e=>{
            this.setState({
                View: e.default
            });
        });
    }

    render() {
        const { View } = this.state;
        return (
            <div className="right-section-container">
                {(View) && <View />}
            </div>
        );
    }

}
export default connect(state=>({
    title: state.rightSection.title,
    type: state.rightSection.type,
}), dispatch => ({
    createNewGroup: (newConversation, newGroupElement) => {
        dispatch(createNewGroup(newConversation, newGroupElement));
        dispatch(hideSectionRight());
    },
}))(RightSection);