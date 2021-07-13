import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RadarGraph from './RadarGraph';
import AverageSpeedGraph from './AverageSpeedGraph';
import DailyActivityGraph from './DailyActivityGraph';
import NutritionCard from './NutritionCard';
import ScoreGraph from './ScoreGraph';

import { connect } from "react-redux";
import { retrieveUser, retrieveUserActivity, retrieveUserSessions, retrieveUserPerformance } from "../actions/user";

export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          componentMounted: false,
        };
    }

    async componentDidMount () {
        await this.getAllUserData(this.props.userId);
        this.setState({
            componentMounted: true,
        });
    }
    
    async getAllUserData(userId){
        await this.props.retrieveUser(userId);
        await this.props.retrieveUserActivity(userId);
        await this.props.retrieveUserSessions(userId);
        await this.props.retrieveUserPerformance(userId);
    }

    render() {
        let firstName;
        let keyData = [];
        let todayScore;
        let activity = [];
        let sessions = [];
        let performanceKind = [];
        let performanceData = [];

        if(this.state.componentMounted){
            firstName = this.props.user.data.userInfos.firstName;
            keyData = this.props.user.data.keyData;
            todayScore = this.props.user.data.todayScore;
    
            if(this.props.userActivity.data.userId.toString() === this.props.userId){
                activity = this.props.userActivity.data.sessions;
            }
            if(this.props.userSessions.data.userId.toString() === this.props.userId){
                sessions = this.props.userSessions.data.sessions;
            }
            if(this.props.userPerformance.data.userId.toString() === this.props.userId){
                performanceKind = this.props.userPerformance.data.kind;
                performanceData = this.props.userPerformance.data.data;
            } 
        }

        return (
            <section className="box">
                <div className="box__title">
                    <h1> Hello <em> {firstName} </em> </h1>
                    <p> Congratulations! You reached yesterday’s goal! 👏 </p>
                </div>
            
                <div className="stats">
                    <div className="stats__activity">
                        <DailyActivityGraph activity={activity}/>
                        <div className="stats__activity__detail">
                            <AverageSpeedGraph sessions={sessions}/>
                            <RadarGraph kind={performanceKind} data={performanceData}/>
                            <ScoreGraph score={todayScore} />
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

const mapStateToProps = (state) => {
    return {
      user: state.user || [],
      userActivity: state.userActivity,
      userSessions: state.userSessions,
      userPerformance: state.userPerformance,
    };
};
  
Stats.propTypes = {
    userId: PropTypes.string,
}
Stats.defaultProps = {
    userId: '0',
}

export default connect(mapStateToProps, { retrieveUser, retrieveUserActivity, retrieveUserSessions, retrieveUserPerformance  })(Stats);