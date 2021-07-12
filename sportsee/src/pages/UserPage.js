import React, { Component } from 'react'
import Sidebar from '../layouts/Sidebar'
import Stats from '../components/Stats'
import UnexistingUser from '../components/UnexistingUser'
import NavigationBar from '../layouts/NavigationBar';

import { connect } from "react-redux";
import { retrieveUser } from "../actions/user";

export class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: this.props.match.params.id,
          userExists: false,
        };
    }

    async componentDidMount() {
        await this.props.retrieveUser(this.state.userId);
        if(this.props.user.length !== 0){
            this.setState({
                userExists: true,
        });
       }
    }

    render() {
        const { userExists, userId } = this.state;
        
        return (
            <div className="userPage">
                <NavigationBar />
                <div className="statsView">
                    <Sidebar />
                    { userExists ? <Stats userId={userId}/> : <UnexistingUser/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps, { retrieveUser  })(UserPage);