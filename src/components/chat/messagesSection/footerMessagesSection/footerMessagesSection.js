import React, { Component } from 'react';
import './footerMessagesSection.scss';

class FooterMessagesSection extends Component {
    render() {
        return (
            <footer className='footer-messages-section'>
                <div className='data-input'>
                    <button className='icon'>plus</button>
                    <button className='icon'>clip</button>
                    <div className="text-message">
                        <input type="text" name="" id="" />
                        <button>:)</button>
                    </div>
                    <button className='icon'>mic</button>
                </div>
            </footer>
        );
    }
}

export default FooterMessagesSection;