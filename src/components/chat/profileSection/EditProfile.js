import React, { Component } from 'react';
import { connect } from 'react-redux';
class EditProfile extends Component {
    render() {
        return (
            <div className="contacts-section-container">
                <div className="back-profile">
                    <div className="back-profile-angle-left">
                        <img src={this.props.angle_left_icon} alt="" />
                    </div>
                    <div className="title-back-profile">{this.props.Translator.t('Editar perfil')}</div>
                </div>
                <div className="body-edit-profile">
                    <div class="section-photo-profile">
                        <p className="title-profile">Foto de perfil</p>
                        img
                        <input type="file" className="input-edit-profile"/>
                    </div>
                    <div class="section-name-profile">
                        <p className="title-profile">Nombre</p>
                        <input type="text" value="Lucia" />
                    </div>
                    <div class="section-status-profile">
                        <p className="title-profile">Estado</p>
                        <input type="text" value="Mexicana i love tacos"/>
                    </div>
                    <div class="section-birthdate-profile">
                        <p className="title-profile">Fecha de nacimiento</p>
                        <input type="date" />
                    </div>
                    <div class="section-email-profile">
                        <p className="title-profile">Correo eléctronico</p>
                        <input type="text" value="" />
                    </div>
                    <div class="section-entreprise-profile">
                        <p className="title-profile">Empresa</p>
                        <input type="text" value="" />
                    </div>
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


export default connect(mapStateToProps, null)(EditProfile);