import React, { Component } from 'react';



class DashText extends Component {

    constructor(props) {
        super(props);
       
    
        this.lastX = 0;
        this.lastY = 0;
        this.onHold = 0;
        this.onLock = 0;
        this.onLockResize = 0;
        this.onResize = 0;
        this.onHoldX = 0;
        this.onHoldY = 0;
        this.onHoldResizeX = 0;
        this.onHoldResizeY = 0;
        this.allowedWrite = false;
        this.textLabel = '';
        this.lockSizeX = 0;
        this.lockSixeY = 0;
        this.dashColor = 'black';
        this.startPositionY = 0;
        this.startPositionX = 0;
    }

    componentDidMount() {
        console.log('load ????')
        this.startPositionY = document.getElementById('DashBoard').offsetTop;
        this.startPositionX = document.getElementById('DashBoard').offsetLeft;
    }

     // this method move text if is on hold text 
     _onMouseDrag(e) {
        let contentDashBoard =  document.getElementById('contentDashBoard');
        this.lastX = e.clientX + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft)+ contentDashBoard.scrollLeft;
        this.lastY = e.clientY + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop ) + contentDashBoard.scrollTop;
        if (this.onHold === 1) {
            let dragText =  document.getElementById('dragText');
            let dragEdit =  document.getElementById('dragEdit');

            dragText.style.position = 'absolute';
            dragEdit.style.position = 'absolute';
            let currentWidth = dragText.offsetLeft + dragText.offsetWidth;
            let currentHeight = dragText.offsetTop + dragText.offsetHeight;
            dragText.style.left = this.lastX + this.onHoldX + 'px';
            dragEdit.style.left = currentWidth - 12.5 + 'px';
            dragText.style.top = this.lastY + this.onHoldY + 'px';
            dragEdit.style.top = currentHeight - 12.5 + 'px';
            dragText.style.cursor = 'default';
        }
    }
    // this method handle move text while user hold it
    _onHold(e) {
        
        if (this.onLock === 0) {
            let contentDashBoard =  document.getElementById('contentDashBoard');
            let dragText =  document.getElementById('dragText');
            this.onLock == 1;
            this.lastX = e.clientX + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft)+ contentDashBoard.scrollLeft;
            this.lastY = e.clientY + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop)+ contentDashBoard.scrollTop;
            let toTop = dragText.offsetTop;
            let toLeft = dragText.offsetLeft;
            this.onHoldY = toTop - this.lastY;
            this.onHoldX = toLeft - this.lastX;
        }
        this.onHold = 1;
    }

    // while resize is active

    _activeResize(e) {
        this.onHold = 0;
    }

    // hold resize tool

    _onHoldResize(e) {
        this.onResize = 1;
    }

    // out resize text 
    _onThrougtResize(e) {
        this.onResize = 0;
        this.onLockResize = 0;
    }

    //this method resize text to custom 

    _onResizeText(e) {
        let dragText =  document.getElementById('dragText');
        let dragEdit =  document.getElementById('dragEdit');
        let contentDashBoard =  document.getElementById('contentDashBoard');
        let dragLabel = document.getElementById('textLabel');

        let textX = e.clientX + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft)+  contentDashBoard.scrollLeft;
        let textY = e.clientY + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop ) + contentDashBoard.scrollTop ;   
        let fromX = dragText.offsetLeft;
        let fromY = dragText.offsetTop;
        let customWidth = textX - fromX;
        let customHeight = textY - fromY;
        
        if (this.onResize === 1) {
            dragEdit.style.left = textX - 12.5 + 'px';
            dragEdit.style.top = textY - 12.5 + 'px';
            dragText.style.height = customHeight + 'px';
            dragLabel.style.fontSize = customHeight + 'px';
            dragText.style.width = customWidth + 'px';
            dragLabel.style.height = customHeight + 'px';
            dragLabel.style.width = customWidth + 'px';
        }
    }
    _onLock = (e) => {
    }

    // calculate html pixel position to canvas position and send data to insert to dashboard
    _insertText = () => {
        let dragText =  document.getElementById('dragText');
        let dragLabel = document.getElementById('textLabel');
        let toTop = dragText.offsetTop;
        let toLeft = dragText.offsetLeft;
        let fontSize = dragLabel.style.fontSize;
        let fontText = dragLabel.value;
        let fixTop = 0;
        // to future implementation
        let fontFamily = dragLabel.style.fontFamily;
        let fontColor = dragLabel.style.color;
        let reference = { 320: 4.6, 300: 4.7, 290: 4.75, 280: 4.8, 250: 4.9, 225: 5, 210: 5.1, 180: 5.2, 100: 5.2 };
        // because until now has'nt  formula , we to calculate with sucession start with 4.6 and end with 5.8 padding text respect input with next  
        // to future generate formula !!!!!
        if (parseFloat(fontSize) >= 320) {
            let micro = 4.6 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 300) {
            let micro = 4.7 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            console.log(fontSize);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 290) {
            let micro = 4.75 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            console.log(fontSize);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 280) {
            let micro = 4.8 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 250) {
            let micro = 4.9 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 225) {
            let micro = 5 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 210) {
            let micro = 5.1 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 180) {
            let micro = 5.2 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 100) {
            let micro = 5.26 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        // has here change to 0.02  
        else if (parseFloat(fontSize) >= 80) {
            let micro = 5.296 - (Math.sqrt(parseFloat(fontSize)) * 0.02);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 75) {
            let micro = 5.36 - (Math.sqrt(parseFloat(fontSize)) * 0.01);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 70) {
            let micro = 5.58 - (Math.sqrt(parseFloat(fontSize)) * 0.02);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
        }
        else if (parseFloat(fontSize) >= 65) {
            let micro = 5.64 - (Math.sqrt(parseFloat(fontSize)) * 0.02);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
            fixTop = 0;
        }
        else if (parseFloat(fontSize) >= 60) {
            let micro = 5.89 - (Math.sqrt(parseFloat(fontSize)) * 0.02);
            fixTop = ((parseFloat(fontSize) / 100) * micro) * ((parseFloat(fontSize) / 100) * micro);
            fixTop = 0;
        }
        // here change to -13 to -25
        else if (parseFloat(fontSize) >= 57) {
            fixTop = - 13.2 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 55) {
            fixTop = - 14 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 50) {
            fixTop = - 15 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 40) {
            fixTop = - 19.8 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 30) {
            fixTop = - 21.8 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 25) {
            fixTop = - 25 - (parseFloat(fontSize) / 100) * 8
        }
        else if (parseFloat(fontSize) >= 11) {
            fixTop = - 38 - (parseFloat(fontSize) / 100) * 8
        }
        else {
            fixTop = - 45 - (parseFloat(fontSize) / 100) * 9
        }
       

        fixTop = ((parseFloat(fontSize)*1.2)-parseFloat(fontSize))*2;


        console.log('SIZE');
        console.log(fontSize);

        console.log('match fix');
        console.log(fixTop);

        console.log('to Top')

        toTop = toTop + fixTop;

        console.log(toTop);

        this.props.insertText(fontText,fontSize,toLeft,toTop)
    }

    // Out from drag tool

    _onThrougt(e) {
        this.onHold = 0;
        this.onLock = 0;
    }

    render() {
        return (<div>
                            <div id='dragText' className='dragText' onClick={this._onLock.bind(this)} onDoubleClick={this._insertText.bind(this)} onMouseLeave={this._onThrougt.bind(this)} onMouseUp={this._onThrougt.bind(this)} onMouseDown={this._onHold.bind(this)} onMouseMove={this._onMouseDrag.bind(this)} style={{ width: '199px', height: '35px', position: 'absolute', top: '200px', left: '200px', padding: '0px', border: '1px solid black', lineHeight:'100%' }} >
                                    <input type='text' id='textLabel' style={{ width: '195px', height: '35px', fontSize: '35px',color:this.props.color,fontFamily: 'Arial', padding: '0px', margin: '0px', outline: 'none', lineHeight:'' }} />
                            </div>
                                    <div id='dragEdit' className='dragEdit' style={{ width: '25px', height: '25px', position: 'absolute', top: '225px', left: '388px', display: 'block' }} >
                                    <div className='Move' id='Move' style={{ width: '25px', height: '25px', border: '1px solid black',fontSize:'20px',cursor: 'pointer' }} onClick={() => this._activeResize(this)} onMouseLeave={() => this._onThrougtResize(this)} onMouseUp={() => this._onThrougtResize(this)} onMouseDown={() => this._onHoldResize(this)} onMouseMove={this._onResizeText.bind(this)} > &#8600; </div>
                            </div>         
        
        </div>)
    }
}



export default DashText;