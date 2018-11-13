import React, { Component } from 'react';
import {connect} from 'react-redux';
import './fileMessage.scss';
import MessagesHelper from '../../../../../lib/helper/messagesHelper';
import FileHelper from '../../../../../lib/helper/fileHelper';

class FileMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mimeType: undefined,
            type: undefined,
            busy: false
        }
        console.log(this.props.message);
    }

    componentWillMount() {
        this.setState({ busy: true });
        MessagesHelper.getBlobObject(this.props.message.blobURL).then(e => {
            const mimeType = e.type.split('/');
            this.setState({ mimeType: mimeType[0], busy: false, type: mimeType[1] });
            let container = document.getElementById(`message_${this.props.id}`);
            container.firstChild.style.padding = '0  0 8px 0 ';
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className={`file-message-wrapper ${(this.state.mimeType==='image')&&'image-footer'}`}>
                {(this.state.mimeType === 'image') ?
                    <img src={this.props.message.blobURL} alt="" /> :
                    <div></div>
                }
                {(this.state.mimeType&this.state.mimeType !== 'image') &&
                    <div>
                        <img src={this.props.file_icon} alt=""/>
                        <span>{this.props.message.fileName}</span>
                    </div>
                }
                <div className="footer-message">
                    {(this.state.mimeType !== 'image') &&
                        <div>{`${(this.state.type) && this.state.type.toUpperCase()} - ${FileHelper.humanFileSize(this.props.message.size, true)}`}</div>
                    }
                    <span>{this.props.message.hour}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    file_icon:state.customizing.Images.file_icon,
});

export default connect(mapStateToProps, null)(FileMessage);