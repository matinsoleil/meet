import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GeneralDataUser.scss'
class GeneralDataUser extends Component {
    render() {
        return (
            <div className="main-chat-general-data-user">
                <div className="grid-container-user-chat">
                    <div className="name-user">{this.props.user.name}<span className="input-user-config"><img className="dots-main" src={this.props.dots_main} alt="dots-main" /></span></div>
                    <div className="icon-user">
                        <div className="outer-circle-user-main" >
                            <img className="img-icon-user-main" src={this.props.user.imgUser} alt="user-main" />
                            <div className="inner-circle-user circle-user">&nbsp;</div>
                        </div>
                    </div>
                    <div className="status-user">{this.props.user.status}</div>
                    <div className="search-contact">
                        <img className="img-icon-search" src={this.props.search_icon} alt={this.props.Translator.t('Buscar')} />
                        <input type="text" className="input-search-main" placeholder={this.props.Translator.t('Buscar')} onChange={this.props.filterList} ></input>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search_icon: state.customizing.Images.search_icon,
        dots_main: state.customizing.Images.dots_main,
        contacts: state.contacts,
        Translator: state.country.translator,
    }
}

export default connect(mapStateToProps, null)(GeneralDataUser)