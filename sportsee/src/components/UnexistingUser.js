import React, { Component } from 'react'

class UnexistingUser extends Component {

    render() {
        return (
            <div className="box__title">
                <h1> Error: <em> this user does not exist </em> </h1>
            </div>
        );
    }
  }
export default UnexistingUser;