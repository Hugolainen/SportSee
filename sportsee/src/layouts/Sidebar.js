import React, { Component } from 'react'
import iconMeditation from "../assets/images/iconMeditation.png"
import iconSwim from "../assets/images/iconSwim.png"
import iconBike from "../assets/images/iconBike.png"
import iconDumbbell from "../assets/images/iconDumbbell.png"

/**
 * Component for the placeholding side navigation bar
 *
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 */
class Sidebar extends Component {
    render() {
      return (
        <section className="sidebar">
            <nav>
                <ul className="sidebar__list">
                    <li className="sidebar__list__icon"> 
                        <img src={iconMeditation} alt="meditation" />
                    </li>
                    <li className="sidebar__list__icon"> 
                        <img src={iconSwim} alt="swim" />
                    </li>
                    <li className="sidebar__list__icon"> 
                        <img src={iconBike} alt="bike" />
                    </li>
                    <li className="sidebar__list__icon"> 
                        <img src={iconDumbbell} alt="dumbbell" />
                    </li>
                </ul>
              </nav>
              <span className="sidebar__copyrights textSmaller"> Copiryght, SportSee 2020 </span>
        </section>
      );
    }
  }
export default Sidebar;