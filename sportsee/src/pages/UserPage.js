import React, { Component } from 'react'
import Sidebar from '../layouts/Sidebar'
import Stats from '../components/Stats'
import UnexistingUser from '../components/UnexistingUser'
import NavigationBar from '../layouts/NavigationBar';

import { connect } from "react-redux";
import { retrieveUser } from "../actions/user";

/**
 * Component for main user page, consists of the navigation bars and the stats dashboard
 *
 * @component
 * @example
 * return (
 *   <UserPage />
 * )
 */
export class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: this.props.match.params.id,
          userExists: false,
          isLoading: true,
        };
    }

    /**
     * Retrive API data on the User on Mounting
     * Updates the isLoading state of the app once the data is retrived
     * Updates the userExists state to true if a user with the provided userId is found
    */
    async componentDidMount() {
        await this.props.retrieveUser(this.state.userId);
        if(this.props.user){
            this.setState({
                userExists: true,
                isLoading: false,
        });
       }
       this.setState({
        isLoading: false,
    });
    }

    render() {
        const { userExists, userId, isLoading } = this.state;
        
        return (
            <div className="userPage">
                <NavigationBar />
                { isLoading 
                ? <div> Stats are loading </div> 
                : 
                <div className="statsView">
                    <Sidebar />
                    { userExists ? <Stats userId={userId}/> : <UnexistingUser/>}
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user.data,
    };
  };

export default connect(mapStateToProps, { retrieveUser  })(UserPage);