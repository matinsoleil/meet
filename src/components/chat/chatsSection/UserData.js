import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Images} from "../../../redux/states/images";
import './UserData.scss'
import assignFilterAction from "../searchBar/assignFilterAction";
import searchBar from "../searchBar/searchBar";
import {setFilter} from "../../../redux/actions/views/controlSection";

//TODO: Fetch user info
class UserData extends Component {
    render() {
        const SearchBarWithFilter = assignFilterAction(searchBar,setFilter);
        return (
            <div className="user-data">
                <div className="user-info">
                    <div className="avatar">
                        <img src={this.props.user.avatar || Images.avatar} alt="user-main"/>
                    </div>
                    <div className="personal">
                        <div className="name">
                            <div className="inner-circle-user circle-user">&nbsp;</div>
                            <span className="text">{this.props.user.name}</span>
                        </div>
                        <div className="status">{this.props.user.status}</div>
                    </div>
                    <div className="user-options-button">
                        <img className="dots-main" src={Images.dots_menu} alt="dots-main"/>
                    </div>
                </div>
                <SearchBarWithFilter/>
            </div>
        )
    }
}

const mapStateToProps = ({user, country}) => {
    return {
        translator: country.translator,
        user: user
    }
};

export default connect(mapStateToProps, null)(UserData)