import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from '../../../redux/actions/views/createConversationBar';
import DropMenu from "../../utils/dropMenu";
import ControlMenuHelper from "../../../lib/helper/controlMenu";
import './CreateConversationBar.scss';


class CreateConversationBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref={div=>{this.container=div}} className="create-conversation-bar" onMouseLeave={() => this.props.toggleMenu(false)}>
                <div className="title">{this.props.translator.t('CHATS')}</div>
                <div className="dropdown">
                    <button className="button" onClick={() => this.props.toggleMenu()}>
                        <span className="text">{this.props.translator.t('NEW')}</span>
                        <img alt="plus" className="plus" src={this.props.plus}/>
                    </button>
                    {this.props.isMenuOpened &&
                        <DropMenu
                            clickHandler={this.props.toggleMenu}
                            container={this.container}
                            optionsMenu={ this.makeOptionsMenu() }
                        />
                    }
                </div>
            </div>
        );
    }

    makeOptionsMenu () {
        return [
            ControlMenuHelper.createNewChat(),
            ControlMenuHelper.createNewGroupalChat(),
            ControlMenuHelper.createNewDiffusionChat()
        ]
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