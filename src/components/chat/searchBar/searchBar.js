import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {addSearchBar, onChange} from "../../../redux/actions/searchBar/searchBar";
import {Images} from "../../../redux/states/images";
import './searchBar.scss';
class SearchBar extends  Component {
    render(){
        return(
            <div className="search-bar">
                <img src={Images.search_icon} alt={this.props.translator.t('Buscar')} />
                <input
                    type="text"
                    className="input-search-bar"
                    placeholder={this.props.translator.t('Buscar')}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

const mapStatesToProps = ({country}) =>  ({
    translator: country.translator,
});

export default connect(mapStatesToProps)(SearchBar);


