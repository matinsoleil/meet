import React, {Component} from 'react'
import SearchBar from './../../../searchBar/searchBar';
import assignFilterAction from "../../../searchBar/assignFilterAction";
import {onChangelFilter} from "../../../../../redux/actions/views/supportSection";
import {Images} from "../../../../../redux/states/images";
import {toggleSupportSection} from "../../../../../redux/actions/views/supportSection";
import './ContactListHeader.scss';
import {connect} from "react-redux";

class ContactListHeader extends Component {
  render() {
    const SearchBarWithAction = assignFilterAction(SearchBar,onChangelFilter);
    return (
        <div className='contact-list-header'>
          <div className='top'>
            <span className='title'>{this.props.title}</span>
              <img onClick={this.props.toggleSupportSection} src={Images.cancel_icon} alt="close"/>
          </div>
          <div className='bottom'>
            <SearchBarWithAction/>
          </div>
        </div>
    )
  }
}



export default connect(null,dispatch=>({
    toggleSupportSection: () => (dispatch(toggleSupportSection())),
}))(ContactListHeader) ;

