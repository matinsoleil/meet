import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Type} from "../../../redux/actions/views/supportSection";
import {createNewGroupFlow} from "../../../redux/actions/conversations/conversations";
import SupportContactList from "./supportContactList/supportContactList";
import './supportSection.scss';

class SupportSection extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props);
        console.log((this.props.type === Type.CREATE_GROUP
            ||this.props.type === Type.FORWARD_MESSAGE
            ||this.props.type === Type.CREATE_DIFFUSION_GROUP ))
    }

    currentAction(){
        const { type } = this.props;
        return (type === Type.CREATE_GROUP) ? this.props.createNewGroupFlow
            : (type === Type.FORWARD_MESSAGE) ? null
                : (type === Type.CREATE_DIFFUSION_GROUP) && null;
    }

    render() {
        return (
            <React.Fragment>
                {(this.props.show)&&<div className="right-section-container">
                    {(this.props.type === Type.CREATE_GROUP
                        ||this.props.type === Type.FORWARD_MESSAGE
                        ||this.props.type === Type.CREATE_DIFFUSION_GROUP ) &&
                    <SupportContactList
                        title={this.props.title}
                        action={this.currentAction()}
                    />}
                </div>}
            </React.Fragment>
        );
    }

}
export default connect(({views}) => ({
    show: views.supportSection.show,
    title: views.supportSection.title,
    type: views.supportSection.type,
}), dispatch => ({
    createNewGroupFlow: (groupsSection) => {
        dispatch(createNewGroupFlow(groupsSection));
    }
}))(SupportSection);

/*
{(this.props.show)&&<div className="right-section-container">
                    {(View) && <View title={this.props.title} action={this.currentAction()} />}
                </div>}
* */