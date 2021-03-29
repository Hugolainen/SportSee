import React, { Component } from 'react'
import RadarGraph from '../../elements/RadarGraph/RadarGraph';
import AverageSpeedGraph from '../../elements/AverageSpeedGraph/AverageSpeedGraph';
import DailyActivityGraph from '../../elements/DailyActivityGraph/DailyActivityGraph';
import NutritionCard from '../../elements/NutritionCard/NutritionCard';
import ScoreGraph from '../../elements/ScoreGraph/ScoreGraph';



class Stats extends Component {
    

    render() {
        const username = "Hugo";

        return (
            <section className="box">
                <h1> Hello <em> {username} </em> </h1>
                <p className="textBigger"> Congratulations! You reached yesterday’s goal! 👏 </p>
            
                <div className="stats">
                    <div className="stats__activity">
                        <DailyActivityGraph />
                        <div className="stats__activity__detail">
                            <AverageSpeedGraph />
                            <RadarGraph />
                            <ScoreGraph />
                        </div>
                    </div>
                    <div className="stats__nutrition">
                        <NutritionCard type="calories"/>
                        <NutritionCard type="proteins"/>
                        <NutritionCard type="carbs"/>
                        <NutritionCard type="lipids"/>
                    </div>
                </div>
            </section>
        );
    }
  }
export default Stats;