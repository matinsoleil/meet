import React, { Component } from 'react';

import ColorPicker from 'ColorPicker';

//import { connect } from 'react-redux';

// this Component has objective select color and custom color

class DashColors extends Component {

    constructor(props) {
        super(props);
        this.itColor = this.itColor.bind(this);
        this.state = {
            showSelector: 'none'
        }
        this.showSelector = this.showSelector.bind(this);
       
    }
    // Load Library PickColor 
    componentDidMount() {
        try{    
            ColorPicker(
                document.getElementById('color-picker'),
                function (hex, hsv, rgb) {
                    document.getElementById('myColor').style.backgroundColor = hex;
                    document.getElementById('myColor').data_color = hex;
                    this.itColor(hex);
                }.bind(this));
        } catch (e) {

            console.log('not load color picker');
        }
    }

    componentWillUnmount() {
          

    }

    // select  color to draw
    itColor = (color) =>
    {
        this.props.pickUpColor(color);

    }

    // display to browse to pick custom color

    showSelector = () =>{

        if (this.state.showSelector === 'none') {
            this.setState({
                showSelector: 'block'
            })
        } else {
            this.setState({
                showSelector: 'none'
            })
        }

    }

    render() {
        return (<div>
                                <div className='toolPick' onMouseLeave={() => this.showSelector()} >
                                    <div id='color-picker' className='colorPicker' style={{ display: this.state.showSelector }} ></div>
                                </div> 
                                <div key={'whitecolor'} className='color' onClick={() => this.itColor('white')} style={{ backgroundColor: 'white' }} ></div>
                                <div key={'blackcolor'} className='color' onClick={() => this.itColor('black')} style={{ backgroundColor: 'black' }} ></div>
                                <div key='mycolor' className='color' id="myColor" style={{ backgroundColor: 'white' }} onClick={() => this.showSelector()} data-color='white' ></div>
                                {this.props.colors.map(color => {
                                    return <div key={color + 'color'} className='color' onClick={() => this.itColor(color)} style={{ backgroundColor: color }} ></div>
                                })}
        
        </div>)
    }
}



export default DashColors;