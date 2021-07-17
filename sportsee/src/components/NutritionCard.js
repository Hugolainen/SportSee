import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NutritionCard extends Component {
    render() {
        const value = this.props.value;
        var unit = "";
        var desc = "";
        var colorClass ="";
        const icon = [];
        switch (this.props.type) {
            case "calories":
                unit="kCal";
                desc = "Calories";
                icon.push(<i key="icon" className="fas fa-fire"></i>);
                break;
            
            case "proteins":
                unit="g";
                desc = "Proteins";
                icon.push(<i key="icon" className="fas fa-drumstick-bite"></i>);
                colorClass ="nutritionCard__icon--protein";
                break;    

            case "carbs":
                unit="g";
                desc = "Carbs";
                colorClass ="nutritionCard__icon--carb";
                icon.push(<i key="icon" className="fas fa-apple-alt"></i>);
                break;

            case "lipids":
                unit="g";
                desc = "Lipids";
                colorClass ="nutritionCard__icon--lipid";
                icon.push(<i key="icon" className="fas fa-hamburger"></i>);
                break;
                    
            default:
                unit="err";
                desc = "error";
                break;
        }

        return (
            <div className="nutritionCard">
                <div className={"nutritionCard__icon " + colorClass}>
                    {icon}
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

NutritionCard.propTypes = {
    type: PropTypes.string,
    value: PropTypes.number,
}

NutritionCard.defaultProps = {
    type: "undefined",
    value: 0,
}

export default NutritionCard;