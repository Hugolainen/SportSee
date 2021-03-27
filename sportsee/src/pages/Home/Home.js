import React, { Component } from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import Stats from '../Stats/Stats'


class Home extends Component {
    render() {

        return (
            <div className="homepage">
                <Sidebar />
                <Stats />
            </div>
        );
    }
  }
export default Home;