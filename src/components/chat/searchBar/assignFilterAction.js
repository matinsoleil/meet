import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

const assignFilterAction = (SearchBar,actionFilter) => {
    return class extends Component{
        onChange = (e) =>{
            this.props.execute(actionFilter,e.target.value);
        }
        render(){
            return(<SearchBar onChange={this.onChange} {...this.props}/>);
        }
    }
}
const mapDispatchToprops = dispatch => ({
    execute: (actionFilter,value) => {
        dispatch(actionFilter(value))
    }
});

export default compose(
    connect(null,mapDispatchToprops),
    assignFilterAction
);