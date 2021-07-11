import React, { Component } from 'react'
import RadarGraph from './RadarGraph';
import AverageSpeedGraph from './AverageSpeedGraph';
import DailyActivityGraph from './DailyActivityGraph';
import NutritionCard from './NutritionCard';
import ScoreGraph from './ScoreGraph';

import {getFirstName, getKeyData} from '../api/api';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          firstname: "",
          keyData: [],
        };
    }
    
    componentDidMount() {
        this.getFirstname();
        this.getKeyData();
    }
      
    async getFirstname(){
        const userName = await getFirstName(12);
        if(userName.error)
          this.setState({ error: userName.error });
        else
        {
          this.setState({ firstname: userName.data });
        }
    }

    async getKeyData(){
        const keyData = await getKeyData(12);
        if(keyData.error)
          this.setState({ error: keyData.error });
        else
        {
          this.setState({ keyData: keyData.data });
        }
    }

    render() {
        var username = "err";
        const dataName = this.state.firstname;
        if(dataName)
        {
            username = dataName;
        }
        
        const nutrientValues = [];
        const dataNutrients = this.state.keyData;
        if(dataNutrients)
        {
            nutrientValues[0] = dataNutrients.calorieCount;
            nutrientValues[1] = dataNutrients.carbohydrateCount;
            nutrientValues[2] = dataNutrients.lipidCount;
            nutrientValues[3] = dataNutrients.proteinCount;
        }


        return (
            <section className="box">
                <div className="box__title">
                    <h1> Hello <em> {username} </em> </h1>
                    <p> Congratulations! You reached yesterday’s goal! 👏 </p>
                </div>
            
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
                        <NutritionCard type="calories" value={nutrientValues[0]}/>
                        <NutritionCard type="proteins" value={nutrientValues[3]}/>
                        <NutritionCard type="carbs" value={nutrientValues[1]}/>
                        <NutritionCard type="lipids" value={nutrientValues[2]}/>
                    </div>
                </div>
            </section>
        );
    }
  }
export default Stats;