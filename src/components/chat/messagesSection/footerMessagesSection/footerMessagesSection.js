import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footerMessagesSection.scss';

class FooterMessagesSection extends Component {
    render() {
        return (
            <footer className='footer-messages-section'>
                <div className='data-input'>
                    <div role="button" className="icon">
                        <img src={this.props.plus} alt="" />
                    </div>
                    <div role="button" className="icon">
                        <img src={this.props.clip} alt="" />
                    </div>
                    <div className="text-message">
                        <input type="text" placeholder="chat" name="" id="" />
                        <div className="icon emoji">
                            <img src={this.props.emoji} alt="" />
                        </div>
                    </div>
                    <div className="icon">
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