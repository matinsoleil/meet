import React, { Component } from 'react';

class DashLine extends Component {

    constructor(props) {
        super(props);
    }

    // Select line weight to draw into dashboard
    Weight = (w) =>{
        
        this.props.weight(w);

    }

    render(){

        return <div> {this.props.lineWeight.map(lw => {
            return <div key={lw + '-lineWeight'} className='lineWeight' onClick={() => this.Weight(lw)} style={{ backgroundColor: this.props.color, width: lw + 'px', height: lw + 'px', borderRadius: lw + 'px', margin: ((30 - lw) / 2) + 'px', marginLeft: '10px' }} ></div>
        })} </div>
    }
}


export default DashLine;