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
        this.position = {bottom:'0px'};
        this.coordenate = { x: 0, y: 0 };
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        this.dots.addEventListener('click', this.toggleMenu)
        document.addEventListener('mouseover', this.onMouse());
    }

    componentWillUnmount() {
        this.dots.removeEventListener('click', this.toggleMenu)
        document.removeEventListener('mouseover', this.onMouse());
    }

    _onMouseMove(e) {
        this.coordenate= { x: e.screenX, y: e.screenY };
    }

    onMouse = () => {
        let windowHeight = window.outerHeight;
        let currentBounding = this.dots.getBoundingClientRect();
        let difference = windowHeight-currentBounding.bottom;
        
        if(difference<=390){
           this.position = {bottom:'167px'};    
        }
        else if(difference<= 380){
           this.position = {bottom:'167px'}; 
        } 
        else if(difference<=350){
           this.position = {bottom:'165px'}
        }else if(difference<=300){
           this.position = {bottom:'155px'};    
        }
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
                        <div className="sideMenu" style={this.position} >
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
