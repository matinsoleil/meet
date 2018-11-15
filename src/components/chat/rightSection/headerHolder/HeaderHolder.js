import React, { Component } from 'react';
import {connect} from 'react-redux';
import './HeaderHolder.scss';

class HeaderHolder extends Component {
    render() {
        return (
            <div className="header-right-side">
                <div className="title-section">
                    <span >{this.props.title}</span>
                    <img src={this.props.cancel_icon} onClick={this.clearClose} alt="addGroup" />
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(state=>({
    cancel_icon:state.customizing.Images.cancel_icon
}))(HeaderHolder);