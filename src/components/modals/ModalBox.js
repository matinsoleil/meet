import React, { Component } from 'react';
import './ModalBox.scss'

class modalBox extends Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: true };
        this.closeWindow = this.closeWindow.bind(this);
      }
    
    closeWindow() {
        this.setState({
            showMenu: false
        });
    }
    render() {
        const showWind = this.state.showMenu ? 'modalShow' : 'modalHide';
        return (
            // <div className="modal {menuVis}">
            <div className={showWind} >
                <div className="modal-content">
                    <span className="close" onClick={this.closeWindow}>&times;</span>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
export default modalBox;