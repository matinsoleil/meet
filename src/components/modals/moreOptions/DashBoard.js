import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions/modalBox/modalBox';
import { imageDashBoard } from '../../../redux/actions/messagesOptions/messagesOptions';
import { addMessage } from '../../../redux/actions/conversation/fetchConversation';
import  DashColors from './DashColors';
import DashText from './DashText';
import DashLine from './DashLine';
import './DashBoard.scss'

class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.conversationId = this.props.SendTo.conversationId;
        this.messageId = this.props.SendTo.messageId;
        this.userId = this.props.SendTo.userId;
        this.contactName = this.props.SendTo.contactName;
        this.contactImage = this.props.SendTo.contactImage;
        this.state = {
            image: 'https://cdn-images-1.medium.com/max/2000/1*4tT8NSatOjW8F4sybzzb9g.jpeg',
            width: '1200',
            height: '600',
            border: '1px solid black',
            x: 0,
            y: 0,
            last_x: 0,
            last_y: 0,
            down: 0,
            lineWeight: 5,
            lineColor: '#000000',
            imageDashBoard: '',
            toolColor: 'none',
            toolLineWeight: 'none',
            toolUploadImage: 'none',
            toolWrite:'none',
            marginTop: '8',
            showColor: 'none',
            labelText: 'write here',
            ctx: ''
        };
        this.down = 0;
        this.counter = 0;
        this.ctx = undefined;
        this.lastX = 0;
        this.lastY = 0;
        this.x = 0;
        this.y = 0;
        this.IMAGE = {};
        this.lineColor = 'black';
        this.lineWeight = '5px';
        this.saveAsImage = this.saveAsImage.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        this.loadImage = this.loadImage.bind(this);
        this.matchWeight = this.matchWeight.bind(this);
        this.colors = ['#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
        this.lineWeight = ['4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'];
        this.weight = 5;
        this.color = '#000000';
        this.loadImage = this.loadImage.bind(this);
        this.selectFiles = this.selectFiles.bind(this);
        this.imageUrl = '';
        this.showPickColor = 'none';
    }

    showDashBoard=()=>{
        this.props.show();
    }
    // this method draw line in dash board
    _onMouseMove(e) {
        let contentDashBoard =  document.getElementById('contentDashBoard');
        this.x = e.clientX - this.refs.canvas.offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft)+ contentDashBoard.scrollLeft;
        this.y = e.clientY - this.refs.canvas.offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop)+ contentDashBoard.scrollTop;
        if (this.down === 1) {
            this.ctx.beginPath(); // begin line path
            this.ctx.lineWidth = this.weight;
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = this.color;
            this.ctx.moveTo(this.lastX, this.lastY); // from
            this.ctx.lineTo(this.x, this.y); // to
            this.ctx.stroke(); // draw it!
            this.lastY = this.y;
            this.lastX = this.x;
        }
    }

    // this method mark position to start line draw
    _onMouseDown(e) {
        let contentDashBoard =  document.getElementById('contentDashBoard');
        this.lastX = e.clientX - this.refs.canvas.offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft)+ contentDashBoard.scrollLeft;
        this.lastY = e.clientY - this.refs.canvas.offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop)+ contentDashBoard.scrollTop;
        this.down = 1;
    }
    // this method mark position to end line draw
    _onMouseUp(e) {
        this.down = 0;
    }
     // this method end line draw when out from dashboard
    _onMouseLeave(e) {
        this.down = 0;
    }
    // this method pickup color line

    pickColor = (color) => {
         this.color = color;
         this.setState({
            lineColor: color
        })
    }
    // this method pickup weight line
    matchWeight(line) {
        this.weight = line;
    }
    // this method start a dashBoard and background as image and paint with white
    updateCanvas() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.ctx.save();
        this.img = new Image();
        this.img.setAttribute('crossOrigin', 'annonymous');
        this.img.onload = function () {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(0, 0, (this.refs.canvas.width - 1), (this.refs.canvas.height - 1));
            this.ctx.restore();
            this.ctx.fillText("", 10, 10);
            this.refs.canvas.setAttribute('crossorigin', 'anonymous')
        }.bind(this);
        this.img.crossOrigin = '';
        this.img.crossOrigin = 'anonymous'
        this.img.src = this.state.image;
    }
    // this method clear all dash board with white background as size of dashboard
    clearCanvas() {
        this.ctx.restore();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, (this.refs.canvas.width-1), (this.refs.canvas.height-1));
    }
    // this method select images to load
    selectFiles = (e) => {
        for (let file of this.fileChooser.files) {
            let blobUrl = URL.createObjectURL(file);
            let xhr = new XMLHttpRequest;
            xhr.responseType = 'blob';
            xhr.onload = function () {
                let recoveredBlob = xhr.response;
                var reader = new FileReader;
                reader.onload = function () {
                    this.imageUrl = reader.result;
                    this.loadImage();
                }.bind(this);

                if (recoveredBlob instanceof Blob) {
                    reader.readAsDataURL(recoveredBlob);
                }
            }.bind(this);
            xhr.open('GET', blobUrl);
            xhr.send();
        }
    }
    // this method load image to dashboard, if image is greather resize this, and/or center image in dash
    loadImage() {
        this.setState({ width: '1200', height: '600' });
        this.refs.canvas.width = '1200';
        this.refs.canvas.height = '600';
        this.img = new Image();
        this.img.onload = function () {
            this.img.setAttribute('crossOrigin', '');
            if (this.state.width >= this.img.width && this.state.height >= this.img.height) {
                let customMargin = (600 - this.img.height) / 2;
                this.setState({ width: this.img.width, height: this.img.height, marginTop: customMargin });
                this.refs.canvas.height = this.img.height;
                this.refs.canvas.width = this.img.width;
                this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
                this.refs.canvas.setAttribute('crossorigin', 'anonymous')
            } else {
                let customSize = this.resizeKeepingRatio(this.img.width, this.img.height, '1200', '600');
                let customMargin = (600 - customSize.height) / 2;
                this.refs.canvas.height = customSize.height;
                this.refs.canvas.width = customSize.width;
                this.setState({ width: customSize.width, height: customSize.height, marginTop: customMargin });
                this.ctx.drawImage(this.img, 0, 0, customSize.width, customSize.height);
                this.refs.canvas.setAttribute('crossorigin', 'anonymous')
            }
        }.bind(this);
        this.img.src = this.imageUrl.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    }
    //this method get aspect ratio from a square (image) and return correspondence width and height
    resizeKeepingRatio(width, height, destWidth, destHeight) {
        if (!width || !height || width <= 0 || height <= 0) {
            throw "Params error !!";
        }
        var ratioW = width / destWidth;
        var ratioH = height / destHeight;
        if (ratioW <= 1 && ratioH <= 1) {
            var ratio = 1 / ((ratioW > ratioH) ? ratioW : ratioH);
            width *= ratio;
            height *= ratio;
        }
        else if (ratioW > 1 && ratioH <= 1) {
            var ratio = 1 / ratioW;
            width *= ratio;
            height *= ratio;
        }
        else if (ratioW <= 1 && ratioH > 1) {
            var ratio = 1 / ratioH;
            width *= ratio;
            height *= ratio;
        }
        else if (ratioW >= 1 && ratioH >= 1) {
            var ratio = 1 / ((ratioW > ratioH) ? ratioW : ratioH);
            width *= ratio;
            height *= ratio;
        }
        return {
            width: width,
            height: height
        };
    }
    // When Component Listen update canvas 
    componentDidMount() {
        this.updateCanvas();

    }
    // this method save dashboard  as message image (blob URL base 64) 
    saveAsImage = () => {
        let image = this.refs.canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        this.setState({
            imageDashBoard: image
        })
        this.props.imageDashBoard(image);
        let date = new Date();
        this.props.addMessage(this.conversationId, {
            id: this.messageId,
            sender: this.userId,
            message: {
                type: "3",
                blobURL: this.refs.canvas.toDataURL("image/png"),
                fileName: 'dashboard',
                size: 100
            },
            hour: `${date.getHours()}:${date.getMinutes()}`,
            status: "1"
        });
        this.props.showModal()
    }


    // this method insert text on dashboard

    insertText=(fontText,fontSize,toLeft,toTop)=>{
        let fixLeft = -(Number(this.refs.canvas.offsetLeft)) - 2;
        this.ctx.restore();
        this.ctx.font = fontSize + " Arial";
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(fontText, toLeft + fixLeft, toTop);
    }

    // display tools at dashboard

    displayTool = (tool) => {
        if (tool === 'color') {
            this.setState({
                toolColor: 'block',
                toolLineWeight: 'none',
                toolUploadImage: 'none',
                toolWrite:'none'
            })
        } else if (tool === 'load') {
            this.selectFiles;
            this.setState({
                toolColor: 'none',
                toolLineWeight: 'none',
                toolUploadImage: 'block',
                toolWrite:'none'
            })
        }else if (tool === 'weight') {
            this.setState({
                toolColor: 'none',
                toolLineWeight: 'block',
                toolUploadImage: 'none',
                toolWrite:'none'
            })
        }else if (tool === 'write') {
            this.setState({
                toolColor: 'none',
                toolLineWeight: 'none',
                toolUploadImage: 'none',
                toolWrite:'block'
            })
        }
    }
    render() {
        return (
            <div className="modal-show" style={{display:this.props.display}} >
            <div className="contentModal"  >
                <div className="contentDashBoard" id="contentDashBoard" >
                    <div className="sharedUser" >
                        <div className="contactDashBoard">
                            <img className="contactImageDashBoard" src={this.contactImage} />
                            <div className="contactNameDashBoard">{this.contactName}</div>
                        </div>
                        <div className="closeDashBoard" onClick={()=>this.showDashBoard()} ><img className="close-icon" src={this.props.close_icon} alt="close-icon" /></div>
                    </div>
                    <div className="drawDashBoard">
                        <canvas id="DashBoard" className="theBoard" crossOrigin="Anonymous" onMouseMove={this._onMouseMove.bind(this)} onMouseDown={this._onMouseDown.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)} onMouseUp={this._onMouseUp.bind(this)} ref="canvas" width={this.state.width} height={this.state.height} style={{ marginTop: this.state.marginTop + 'px' }} />
                    </div>
                    <div className="optionsDashBoard">
                        <div className="toolsDraw">
                        
                            <div className="tool none" ></div>
                            <div className='tool colors' style={{ display: this.state.toolColor }} >
                               <DashColors colors={this.colors} pickUpColor={this.pickColor}  />
                            </div>
                            <div className='tool write' style={{ display: this.state.toolWrite }}  >
                                <DashText insertText={this.insertText} color={this.state.lineColor} /> 
                         
                            </div>
                            <div className='tool loadFile' style={{ display: this.state.toolUploadImage }} >
                                <input onChange={this.selectFiles} ref={(input) => { this.fileChooser = input }} type="file" style={{ display: "block" }} multiple />
                            </div>
                            <div className='tool weightLine' style={{ display: this.state.toolLineWeight }} >
                                <DashLine lineWeight={this.lineWeight} weight={this.matchWeight} color={this.state.lineColor} />
                            </div>
                        </div>
                        <div className='drawOptions'>
                            <div className='drawOption' ><a onClick={()=>this.showDashBoard()}  > <img className="optionIconDashBoard" src={this.props.reply_icon} alt="reply-icon" /></a></div>
                            <div className="drawOption" onClick={() => this.displayTool('load')} ><img className="optionIconDashBoard" src={this.props.canvas_icon} alt="canvas-icon" /></div>
                            <div className='drawOption' ><a ref="clear" onClick={this.clearCanvas} ><img className="optionIconDashBoard" src={this.props.erase_icon} alt="erase-icon" /></a></div>
                            <div className="drawOption" onClick={() => this.displayTool('weight')} ><img className="optionIconDashBoard" src={this.props.pen_icon} alt="pen-icon" /></div>
                            <div className="drawOption" onClick={() => this.displayTool('write')} style={{color:'#5886c0',fontSize:'25px',fontWeight:'bold'}} >T</div>
                            <div className="drawOption" onClick={() => this.displayTool('color')} ><span className="optionIconDashBoard colorDashBoard" style={{ float: 'left', width: '24px', height: '24px', border: '1px solid gray', backgroundColor: this.state.lineColor }} ></span></div>
                            <div className='drawOption finalOption' ><a onClick={this.saveAsImage}  >{this.props.Translator.t('END')}</a></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    imageDashBoard: state.imageDashBoard,
    Translator: state.country.translator,
    reply_icon: state.customizing.Images.reply_icon,
    canvas_icon: state.customizing.Images.canvas_icon,
    erase_icon: state.customizing.Images.erase_icon,
    pen_icon: state.customizing.Images.pen_icon,
    close_icon: state.customizing.Images.close_icon,
})

const mapDispatchToProps = dispatch => ({
    showModal: () => {
        dispatch(showModal());
    },
    imageDashBoard: (image) => {
        dispatch(imageDashBoard(image))
    },
    addMessage: (id, message) => {
        dispatch(addMessage(id, message));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);