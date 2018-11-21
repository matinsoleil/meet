import React, { Component } from 'react';
import { connect } from 'react-redux';
class MyCodeQR extends Component {
    render() {
        return (
            <div className="contacts-section-container">
                <div className="back-profile">
                    <div className="back-profile-angle-left">
                        <img src={this.props.angle_left_icon} alt="" />
                    </div>
                    <div className="title-back-profile">{this.props.Translator.t('Mi código QR')}</div>
                </div>

                <div className="body-my-code-qr">
                    <div className="title-body-my-code-qr">
                        {this.props.Translator.t('Comparte tu perfil con tu código QR.')}
                    </div>
                    <div className="qr"></div>
                    <div className="image-profile-user"></div>
                    <div>Lucia</div>
                    <div> 55 5658 1111 </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        angle_left_icon: state.customizing.Images.angle_left_icon,
        Translator: state.country.translator,
    }
}

export default connect(mapStateToProps, null)(MyCodeQR);