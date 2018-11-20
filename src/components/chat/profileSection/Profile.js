import React, { Component } from 'react';
import { connect } from 'react-redux'
class Profile extends Component {
    render() {
        return (
            <div className="contacts-section-container">
                <div className="back-profile">
                    <div className="back-profile-angle-left">
                        <img src={this.props.angle_left_icon} alt="" />
                    </div>
                    <div className="title-back-profile">{this.props.Translator.t('Perfil')}</div>
                </div>
                <div className="data-profile-rectangle">
                    <div className="oval-image-user"></div>
                    <div className="name-profile-user">Lucia</div>
                    <div className="phone-profile-user">55 5658 1111</div>
                    <div className="label-profile-user"> Mexicana i love tacos </div>
                </div>
                <button className="btn-edit-profile">{this.props.Translator.t('Editar perfil')}</button>
                <div className="my-code-qr">
                    <img src={this.props.qr_icon} alt="seach-icon" />
                    <div className="my-code-qr-title"> {this.props.Translator.t('Mi codigo QR')}</div>
                    <img src={this.props.angle_right_icon} alt="" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        qr_icon: state.customizing.Images.qr_icon,
        angle_right_icon: state.customizing.Images.angle_right_icon,
        angle_left_icon: state.customizing.Images.angle_left_icon,
        Translator: state.country.translator,
    }
}

export default connect(mapStateToProps, null)(Profile)