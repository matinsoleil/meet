import React, {Component} from 'react';
import './dropMenu.scss'
export default class DropMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            fixed:'',
        }
    }

    componentDidMount() {
        this.fixPosition();
    }

    fixPosition(){
        this.setState({
            fixed:(this.props.container.getClientRects()[0].bottom + this.dropMenu.clientHeight) >
            document.getElementsByTagName('body')[0].clientHeight ? 'up':''
        });
    }

    render(){
        return(
            <div ref={div=>{this.dropMenu=div}} className={`dropdown-content ${this.state.fixed}`} onClick={this.props.onClick}>
                {this.props.optionsMenu.map((option,key)=>{
                    return <a key={key} onClick={option.clickHandler}>{option.text}</a>
                })}
            </div>
        );
    }
}