import React, { Component } from 'react';
import './GeneralContactData.scss'
import DotsMenuContact from './dotsMenuContact';
import { connect } from 'react-redux'

class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            menuState: false,
        }
    }
    handleClick() {
        this.props.onClick(this.props.contact.id)
    }
    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots);
        this.bubble.addEventListener('mouseleave', this.showDots);
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots);
        this.bubble.removeEventListener('mouseleave', this.showDots);
    }

    showDots = () => {
        console.log("Stylopm");
        this.setState({
            menuState: !this.state.menuState
        });
    }
    render() {
        return (
            <div className="contact-chat"  ref={div => { this.bubble = div }}>
                <div className="grid-container-contact-chat">
                    <div className="icon-contact" onClick={this.handleClick}>
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.contact.imgContact} alt="icon-user" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact" onClick={this.handleClick}><span className="text-contact"><p className="word-contact">{this.props.contact.name}</p><img className="status-contact" src={this.props.status_user_icon} alt="status-conctact" /></span></div>
                    <div className="day-last-message" onClick={this.handleClick}><p className="day-last">{this.props.contact.dayLastMessage}</p></div>
                    <div className="last-message" onClick={this.handleClick}>{this.props.contact.lastMessage}</div>
                    <div className="count-message" onClick={this.handleClick}>
                        <div className="circle-count-message">
                            <p className="count-message-number">{this.props.contact.countMessage}</p>
                        </div>
                    </div>
                    {
                        (this.state.menuState) &&
                        <DotsMenuContact showDots={this.showDots} display={this.state.menuState} id={this.props.contact.id} type={null} selectable={this.state.selectable} />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dots_menu: state.customizing.Images.dots_menu,
        status_user_icon: state.customizing.Images.status_user_attach_icon,
    }
}

export default connect(mapStateToProps, null)(GeneralContactData);