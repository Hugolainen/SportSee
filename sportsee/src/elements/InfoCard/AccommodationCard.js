import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AccommodationCard extends Component {
    render() {
        return (
            <Link to={`/accomodation/${this.props.id}`}>
                <div className="accommodationCard">
                    <img className="accommodationCard__image" src={this.props.cover} alt="cover" />
                    <p className="accommodationCard__title textWhite"> {this.props.title} </p> 
                </div>
            </Link>
        );
    }
  }
export default AccommodationCard;