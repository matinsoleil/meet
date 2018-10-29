import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlertGeneral } from '../../../redux/selectors/alertGeneral'
import './dotsMenuContact.scss'
class dotsMenuContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showMenu: false,
        }
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    componentDidMount() {
        this.dots.addEventListener('click', this.toggleMenu)
    }

    componentWillUnmount() {
        this.dots.removeEventListener('click', this.toggleMenu)
    }

    submitCreateSilence = values => {
        this.props.chat["silence"] = values.timeSilence
        this.setState({
            showModalSilenceConversation: false
        });
    }

    render() {
        const titleActionFix = this.props.chat.pinner === "0" ? "Fijar chat" : "Dejar de fijar chat"
        const titleActionFile = this.props.chat.file === "0" ? "Archivar chat" : "Desarchivar chat"
        const titleActionSilence = this.props.chat.silence === "0" ? "Silenciar chat" : "Cancelar silencio"
        return (
            <div ref={div => { this.wrapper_menu_dots = div }} className="menu-wrapper">
                <img ref={img => { this.dots = img }} className="dots-menu" src={this.props.dots_menu} alt="" />
                {
                    (this.state.showMenu) &&
                    <div id={`dots_dropmenu_${this.props.id}`} ref={div => { this.menu_dots = div }} className="dots-dropmenu">
                        <div className="sideMenu">
                            <p className="optionSideMenu"><a onClick={this.props.fileContact}> {titleActionFile} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showModalSilenceConversationAction}> {titleActionSilence} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.fixContact}> {titleActionFix} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showMsj}> Marcar como no leido </a></p>
                            <p className="optionSideMenu" onClick={this.props.showModalDeleteConversationContactAction} ><a> Eliminar historial del chat </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showModalDeleteContactAction}> Eliminar chat </a></p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        alertGeneral: getAlertGeneral(state),
        dots_menu: state.customizing.Images.dots_menu,
    }
}

export default connect(mapStateToProps, null)(dotsMenuContact)
