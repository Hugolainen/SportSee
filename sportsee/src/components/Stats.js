import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RadarGraph from './RadarGraph';
import AverageSpeedGraph from './AverageSpeedGraph';
import DailyActivityGraph from './DailyActivityGraph';
import NutritionCard from './NutritionCard';
import ScoreGraph from './ScoreGraph';

import { connect } from "react-redux";
import { retrieveUser, retrieveUserActivity, retrieveUserSessions, retrieveUserPerformance } from "../actions/user";

/**
 * Component offering the stats dashboard, it fetches the data from the API and calls the needed charts using those data as props
 *
 * @component
 * @example
 * const userId = 12
 * return (
 *   <Stats userId={userId}/>
 * )
 */
export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
        };
    }

    async componentDidMount () {
        await this.getAllUserData(this.props.userId);
        this.setState({
            isLoading: false,
        });
    }
    
    async getAllUserData(userId){
        await this.props.retrieveUser(userId);
        await this.props.retrieveUserActivity(userId);
        await this.props.retrieveUserSessions(userId);
        await this.props.retrieveUserPerformance(userId);
    }

    render() {
        if(this.state.isLoading) {
            return (<div> Stats are loading </div>);
        }
        else {
            const firstName = this.props.user.userInfos.firstName;
            const keyData = this.props.user.keyData;
            const todayScore = this.props.user.todayScore;

            const activity = this.props.userActivity.sessions;

            const sessions = this.props.userSessions.sessions;

            const performanceKind = this.props.userPerformance.kind;
            const performanceData = this.props.userPerformance.data;

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
}

const mapStateToProps = (state) => {
    return {
      user: state.user.data,
      userActivity: state.userActivity.data,
      userSessions: state.userSessions.data,
      userPerformance: state.userPerformance.data,
    };
};
  
Stats.propTypes = {
    userId: PropTypes.string,
    user:PropTypes.shape({
        data: PropTypes.shape({
            id: PropTypes.number,
            userInfos: PropTypes.shape({
                firstName: PropTypes.string,
                lastName: PropTypes.string,
                age: PropTypes.number
            }),
            todayScore: PropTypes.number,
            keyData: PropTypes.shape({
                calorieCount: PropTypes.number,
                proteinCount: PropTypes.number,
                carbohydrateCount: PropTypes.number,
                lipidCount: PropTypes.number
            })
        })
    }),
}

Stats.defaultProps = {
    userId: '',
    user:PropTypes.shape({
        data: PropTypes.shape({
            id: 0,
            userInfos: PropTypes.shape({
                firstName: 'err',
            }),
            todayScore: 0,
            keyData: PropTypes.shape({
                calorieCount: 0,
                proteinCount: 0,
                carbohydrateCount: 0,
                lipidCount: 0
            })
        })
    }),
}

export default connect(mapStateToProps, { retrieveUser, retrieveUserActivity, retrieveUserSessions, retrieveUserPerformance  })(Stats);