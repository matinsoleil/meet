import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showDashBoard } from '../../../../../redux/actions/dashBoard/dashBoard';
import DashBoard from '../../../../../components/modals/moreOptions/DashBoard';
import './moreOptions.scss';

class MoreOptions extends Component {

constructor(props) {
    super(props)
    this.state={display:'none'}
    // Dashboard data contact to send
    this.dashBoard = {
         SendTo: { messageId:this.props.message,conversationId:this.props.conversation, userId:this.props.user, contactName: this.props.contact.name, contactImage:this.props.contact.imgContact} , 
      }
     this.showDashBoard = 'block'  
    }
    // Display or Hidden MoreOptions and Dashboard ,or check preference actions redux 
    displayBoard = () =>{
        let display = 'none';  
        let moreOption = 'none';
         if(this.state.display==='none'){
           display = 'block';
           this.props.onClick(); // hidden MoreOptions
         }else{
            display = 'none';
         }
         this.setState({display:display,option:moreOption});

    }
    render() {  
        return (
            <div>
            {this.props.showMore  === true  ? <div className="moreOptions" > <span className="moreOption" onClick={()=>this.displayBoard()}  >Dashboard</span></div> : null }
            <DashBoard SendTo={this.dashBoard.SendTo} display={this.state.display} show={this.displayBoard}  />
            </div>
           
        )  
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreOptions);