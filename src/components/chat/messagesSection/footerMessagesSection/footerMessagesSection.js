import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'
import './footerMessagesSection.scss';

class FooterMessagesSection extends Component {

    selectFiles = (e) => {
    }

    recordAudio = () => {
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia;
        console.log("GET_USER_MEDIA",navigator.mediaDevices.getUserMedia);
    }

    render() {
        return (
            <footer className='footer-messages-section'>
                <div className='data-input'>
                    <div role="button" className="icon">
                        <img src={this.props.plus} alt="" />
                    </div>
                    <div role="button" onClick={() => { $(this.fileChooser).trigger('click'); }} className="icon">
                        <img src={this.props.clip} alt="" />
                        <input onChange={this.selectFiles} ref={(input) => { this.fileChooser = input }} type="file" style={{ display: "none" }} multiple />
                    </div>
                    <div className="text-message">
                        <input type="text" placeholder="chat" name="" id="" />
                        <div className="icon emoji">
                            <img src={this.props.emoji} alt="" />
                        </div>
                    </div>
                    <div onClick={this.recordAudio} className="icon">
                        <img src={this.props.mic} alt="" />
                    </div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        clip: state.customizing.Images.clip,
        emoji: state.customizing.Images.emoji,
        mic: state.customizing.Images.mic,
        plus: state.customizing.Images.plus
    }
}

export default connect(mapStateToProps, null)(FooterMessagesSection);