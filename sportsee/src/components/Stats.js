import React, { Component } from 'react'
import RadarGraph from './RadarGraph';
import AverageSpeedGraph from './AverageSpeedGraph';
import DailyActivityGraph from './DailyActivityGraph';
import NutritionCard from './NutritionCard';
import ScoreGraph from './ScoreGraph';

import userService from '../services/user.service';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfos: [],
            keyData: [],
            todayScore: 0,
        };
    }

    componentDidMount() {
        this.getAllUserData(this.props.userId)
    }
    
    getAllUserData(userId){
        this.getUserInfos(userId);
        this.getUserKeyData(userId);
        this.getUserTodayScore(userId);
    }

    getUserInfos(id) {
        userService.getUser(id)
          .then((res) => {
            this.setState({
                userInfos: res.data.data.userInfos,
            });
          })
    }

    getUserKeyData(id) {
        userService.getUser(id)
          .then((res) => {
            this.setState({
                keyData: res.data.data.keyData,
            });
          })
    }

    getUserTodayScore(id) {
        userService.getUser(id)
          .then((res) => {
            this.setState({
                todayScore: res.data.data.todayScore,
            });
          })
    }

    render() {
        const firstName = this.state.userInfos.firstName;
        const keyData = this.state.keyData;
        const todayScore = this.state.todayScore;


       // console.log(todayScore);

        return (
            <section className="box">
                <div className="box__title">
                    <h1> Hello <em> {firstName} </em> </h1>
                    <p> Congratulations! You reached yesterday’s goal! 👏 </p>
                </div>
            
                <div className="stats">
                    <div className="stats__activity">
                        <DailyActivityGraph />
                        <div className="stats__activity__detail">
                            <AverageSpeedGraph />
                            <RadarGraph />
                            <ScoreGraph value={todayScore} />
                        </div>
                    </div>
                    <div className="stats__nutrition">
                        <NutritionCard type="calories" value={keyData.calorieCount}/>
                        <NutritionCard type="proteins" value={keyData.proteinCount}/>
                        <NutritionCard type="carbs" value={keyData.carbohydrateCount}/>
                        <NutritionCard type="lipids" value={keyData.lipidCount}/>
                    </div>
                </div>
            </section>
        );
    }
  }
export default Stats;