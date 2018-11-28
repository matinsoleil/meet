import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from '../../../redux/actions/views/createConversationBar';
import './CreateConversationBar.scss';


class CreateConversationBar extends Component {

    constructor(props) {
        super(props);

        this.optionsMenu = [
            {
                text: this.props.translator.t('NEW_CHAT'),
                clickHandler: null
            },
            {
                text: this.props.translator.t('NEW_GROUPAL_CHAT'),
                clickHandler: null
            },
            {
                text: this.props.translator.t('NEW_DIFFUSION_CHAT'),
                clickHandler: null
            }
        ];

    }

    render() {
        return (
            <div className="create-conversation-bar" onMouseLeave={() => this.props.toggleMenu(false)}>
                <div className="title">{this.props.translator.t('CHATS')}</div>
                <div className="dropdown">
                    <button className="button" onClick={() => this.props.toggleMenu()}>
                        <span className="text">{this.props.translator.t('NEW')}</span>
                        <img alt="plus" className="plus" src={this.props.plus}/>
                    </button>
                    {this.props.isMenuOpened &&
                        <div className="dropdown-content" onClick={() => this.props.toggleMenu()}>
                            {
                                this.optionsMenu.map(
                                    (option, key) => <a key={key}  onClick={option.clickHandler}>{option.text}</a>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({country, customizing, views}) => {
    return {
        translator: country.translator,
        plus: customizing.Images.plus,
        isMenuOpened: views.createConversationBar.isMenuOpened
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMenu: (show = null) => dispatch(toggleMenu(show))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateConversationBar);