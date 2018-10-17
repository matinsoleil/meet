import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./optionsSelection.scss"

class OptionsSelection extends Component {

    componentDidUpdate(){
        console.log(this.props.type);
    }

    render() {
        return (
            <div className="options-section">
                {(this.props.type==='3')&&
                <IconButton image={this.props.forward} name='Descargar' />
                }
                <IconButton image={this.props.forward} name='Reenviar' />
                <IconButton image={this.props.trash} name='Eliminar' />
            </div>
        );
    }
}

const IconButton = props => {
    let { image, alt, name } = props;
    return (
        <div className="icon-button">
            <img src={image} alt={alt} />
            <span>{name}</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        forward: state.customizing.Images.forward,
        trash: state.customizing.Images.trash
    }
}

export default connect(mapStateToProps)(OptionsSelection);