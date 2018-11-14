import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showModal } from '../../redux/actions/modalBox/modalBox';

class Confirm extends Component {
    render() {
        return (
            <div className="modal-content">
                <div className="title">{this.props.title}</div>
                <div className="button-section">
                    {(this.props.buttons) && this.props.buttons.map((c, key) => {
                        return <button key={key} onClick={() => {
                            (c.action) && c.action();
                            this.props.showModal();
                        }} >{c.name}</button>
                    })}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    showModal: () => {
        dispatch(showModal());
    }
})

export default connect(null,mapDispatchToProps)(Confirm);