import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewGroupFlow, Type} from "../../../redux/actions/views/supportSection";
import './supportSection.scss';

class SupportSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            View: undefined,
            ready: false,
        }
    }

    currentAction = () => {
        const { type } = this.props;
        return (type === Type.CREATE_GROUP) ? this.props.createNewGroupFlow
            : (type === Type.FORWARD_MESSAGE) ? null
                : (type === Type.CREATE_DIFFUSION_GROUP) && null;
    }
    shouldComponentUpdate(nextProps,nextState){
        return (this.props.show !== nextProps.show || this.state.ready !== nextState.ready);
    }
    componentDidUpdate(){
        (this.props.show && !this.state.ready)&&(this.props.type) && import('./' + this.props.type).then(e => {
            this.setState({
                View: e.default,
                ready: true,
            });
        });
    }
    render() {
        const { View } = this.state;
        return (
            <React.Fragment>
                {(this.props.show)&&<div className="right-section-container">
                    {(View) && <View title={this.props.title} action={this.currentAction()} />}
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