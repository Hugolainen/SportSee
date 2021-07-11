import React, { Component } from 'react'
import Sidebar from '../layouts/Sidebar'
import Stats from '../components/Stats'
import UnexistingUser from '../components/UnexistingUser'
import NavigationBar from '../layouts/NavigationBar';

class UserPage extends Component {
    render() {
        const userExists = true;

        return (
            <div className="userPage">
                <NavigationBar />
                <div className="statsView">
                    <Sidebar />
                    {userExists ? <Stats /> : <UnexistingUser/>}
                </div>
            </div>
        );
    }
  }
export default UserPage;