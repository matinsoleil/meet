import React, { Component } from 'react';
import RightSideContactList from './RightSideContactList/RightSideContactList';
import { connect } from 'react-redux';
import { createNewGroup } from '../../../redux/actions/groups/groups';
import { toggleRightSide, Type } from '../../../redux/actions/rightSection/rightSection';
import hideSectionRight from '../../../redux/actions/rightSection/hideSectionRight';
import './RightSection.scss';
class RightSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            View: undefined,
        }
    }
    currentAction = () => {
        const { type } = this.props;
        return (type === Type.CREATE_GROUP) ? this.props.createNewGroup
            : (type === Type.FORWARD_MESSAGE) ? null
                : (type === Type.CREATE_DIFFUSION_GROUP) && null;
    }
    componentWillMount() {
        (this.props.type) && import('./' + this.props.type).then(e => {
            this.setState({
                View: e.default
            });
        });
    }
    render() {
        const { View } = this.state;
        return (
            <div className="right-section-container">
                {(View) && <View title={this.props.title} action={this.currentAction()} />}
            </div>
        );
    }

}
export default connect(state => ({
    title: state.rightSection.title,
    type: state.rightSection.type,
}), dispatch => ({
    createNewGroup: (newConversation, newGroupElement) => {
        dispatch(createNewGroup(newConversation, newGroupElement));
        dispatch(toggleRightSide(undefined,undefined));
    },
}))(RightSection);