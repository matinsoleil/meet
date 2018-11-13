import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ModalBox.scss'

class ModalBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: undefined
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log(this.props, this.state);
        return (nextState.view !== this.state.view ||
            nextProps.viewPath !== this.props.viewPath);
    }

    componentWillUpdate = (nextProps, nextState) => {
        (nextProps.viewPath) ? import('./'+nextProps.viewPath).then((e) => {
            this.setState({
                view: e.default,
            });
        }) : this.setState({view:undefined});
    }


    render() {
        return (
            <div className="modal-show" hidden={!this.props.show}>
                {(this.state.view && this.props.viewPath !== undefined) ? <this.state.view
                    title={this.props.title}
                    buttons={this.props.buttons}
                    onSubmit={(this.props.buttons['Accept'])&&this.props.buttons['Accept'].action}
                /> : <div></div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    show: state.generalModal.show,
    buttons: state.generalModal.buttons,
    title: state.generalModal.title,
    viewPath: state.generalModal.viewPath
})

export default connect(mapStateToProps)(ModalBox);
