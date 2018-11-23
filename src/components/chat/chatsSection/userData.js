import React, { Component } from 'react'
import { connect } from 'react-redux'
import './userData.scss'
//TODO: Fetch user info
class UserData extends Component {
    render() {
        return (
            <div className="user-data">
                <div className="user-info">
                    <div className="avatar">
                        <img src={this.props.user.avatar || this.props.avatar} alt="user-main" />
                    </div>
                    <div className="personal">
                        <div className="name">
                            <div className="inner-circle-user circle-user">&nbsp;</div>
                            <span className="text">{this.props.user.name}</span>
                        </div>
                        <div className="status">{this.props.user.status}</div>
                    </div>
                    <div className="user-options-button">
                        <img className="dots-main" src={this.props.dots_main} alt="dots-main" />
                    </div>
                </div>
                <div className="contact-search">
                    <img className="img-icon-search" src={this.props.search_icon} alt={this.props.translator.t('Buscar')} />
                    <input type="text" className="input-search-main" placeholder={this.props.translator.t('Buscar')} onChange={this.props.filterList} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({user, country, customizing}) => {
    return {
        translator: country.translator,
        user: user,
//TODO: move to assets
        search_icon: customizing.Images.search_icon,
        dots_main: customizing.Images.dots_main,
        avatar: customizing.Images.avatar
    }
}

export default connect(mapStateToProps, null)(UserData)