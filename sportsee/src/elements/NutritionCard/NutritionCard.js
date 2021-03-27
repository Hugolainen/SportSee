import React, { Component } from 'react'

class NutritionCard extends Component {
    render() {
        const value = 100;
        const unit = "g";
        const desc = "desc";

        return (
            <div className="nutritionCard">
                <div className="nutritionCard__icon">
                    <i class="fas fa-fire"></i>
                </div>
                <div className="nutritionCard__info">
                    <p> 
                        <strong> {value + unit} </strong>
                        <br/> 
                        {desc}
                    </p>
                </div>
            </div>
        );
    }
  }
export default NutritionCard;