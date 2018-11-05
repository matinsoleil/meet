import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./optionsSelection.scss"
import { deleteMessagesSelected } from '../../../../../redux/actions/messagesOptions/messagesOptions';
import ModalBox from './../../../../modals/ModalBox';
import { showSectionGroups } from '../../../../../redux/actions/groups/showSectionGroups';
import MessagesHelper from '../../../../../lib/helper/messagesHelper';
import GenerateId from '../../../../../lib/helper/generateId';

class OptionsSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            busy:false,
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    deleteMessages = (e) => {
        this.toggleModal();
    }

    downloadFiles = async () => {
        console.log(this.state);
        if (!this.state.busy) {
            console.log(this.state.busy);
            let files = [];
            this.setState({busy:true});
            for (let messageId of this.props.messages) {
                const message = MessagesHelper.getMessageById(this.props.conversation.conversation, messageId).message;
                await MessagesHelper.getBlobObject(message.blobURL)
                    .then(e => {
                        files.push({
                            fileName: message.fileName,
                            blobData: e
                        });
                    });
            }

            MessagesHelper.getZipUrl(files).then(
                url => {
                    this.link.download = `${GenerateId.generate()}.zip`;
                    this.link.href = url;
                    this.link.onclick = () => {
                        setTimeout(() => { URL.revokeObjectURL(this.link.href); this.link.href = ''; }, 1500);
                    }
                    this.link.click();
                    this.setState({busy:false});
                }
            );
        }
    }

    accept = () => {
        this.toggleModal();
        this.props.deleteMessagesSelected(this.props.conversation.id,this.props.messages);
    }

    render() {
        return (
            <div className="options-section">
                {(this.props.type === '3') &&
                    <IconButton
                        ref={iconButton => { this.link = iconButton }}
                        type={this.props.type} onClick={this.downloadFiles}
                        className="download-icon" image={this.props.forward}
                        name='Descargar' />
                }
                <IconButton onClick={() => { this.props.showSectionGroups(this.props.contacts) }} image={this.props.forward} name='Reenviar' />
                <IconButton onClick={this.deleteMessages} image={this.props.trash} name='Eliminar' />
                {(this.state.showModal) &&
                    <ModalBox body={
                        <div className="modal-content">
                            <div className='title'>{'¿Seguro que desea eliminar estos mensajes?'}</div>
                            <div className='button-section'>
                                <button onClick={this.toggleModal}>Cancelar</button>
                                <button onClick={this.accept}>Eliminar</button>
                            </div>
                        </div>
                    } />
                }
            </div>
        );
    }
}

const IconButton = React.forwardRef((props, ref) => {
    let { image, alt, name } = props;
    return (
        <React.Fragment>
            <div onClick={props.onClick} className={`icon-button ${props.className}`}>
                <img src={image} alt={alt} />
                <span>{name}</span>
            </div>
            {(props.type) && <a style={{ display: 'none' }} ref={ref}>zip</a>}
        </React.Fragment>
    );
})

const mapStateToProps = state => {
    return {
        forward: state.customizing.Images.forward,
        trash: state.customizing.Images.trash,
        messages: state.messagesOptions.messages,
        contacts: state.contacts,
    }
}

const mapDispathToProps = dispatch => {
    return {
        deleteMessagesSelected: (conversationId,messagesId) => {
            dispatch(deleteMessagesSelected(conversationId,messagesId));
        },
        showSectionGroups: listContacs => {
            dispatch(showSectionGroups(listContacs));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(OptionsSelection);