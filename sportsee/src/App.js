import React, {Component} from 'react';
import NavigationBar from './layouts/Header/NavigationBar';
import Home from './pages/Home/Home';
import {getFirstName, getTodayScore, getKeyData, getDailyActivity, getAverageSessions, getPerformance} from './api/api';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      firstname: "",
      todayScore: 0,
      keyData: [],
      dailyActivity: [],
      averageSessions: [],
      performance: []
    };
  }
  
  componentDidMount() {
    //this.getFirstname();
    //this.getTodayScore();
    //this.getKeyData();
    //this.getDailyActivity();
    //this.getAverageSessions();
    //this.getPerformance();
  }
  
  async getFirstname(){
    const userName = await getFirstName(12);
    if(userName.error)
      this.setState({ error: userName.error });
    else
    {
      console.log(userName);
      this.setState({ username: userName.data });
    }
  }

  async getTodayScore(){
    const todayScore = await getTodayScore(12);
    if(todayScore.error)
      this.setState({ error: todayScore.error });
    else
    {
      console.log(todayScore.data);
      this.setState({ todayScore: todayScore.data });
    }
  }

  async getKeyData(){
    const keyData = await getKeyData(12);
    if(keyData.error)
      this.setState({ error: keyData.error });
    else
    {
      console.log(keyData.data);
      console.log(keyData.data.calorieCount);
      this.setState({ keyData: keyData.data });
    }
  }

  async getDailyActivity(){
    const dailyActivity = await getDailyActivity(12);
    if(dailyActivity.error)
      this.setState({ error: dailyActivity.error });
    else
    {
      console.log(dailyActivity.data);
      this.setState({ dailyActivity: dailyActivity.data });
    }
  }

  async getAverageSessions(){
    const averageSessions = await getAverageSessions(12);
    if(averageSessions.error)
      this.setState({ error: averageSessions.error });
    else
    {
      console.log(averageSessions.data);
      this.setState({ averageSessions: averageSessions.data });
    }
  }

  async getPerformance(){
    const performance = await getPerformance(12);
    if(performance.error)
      this.setState({ error: performance.error });
    else
    {
      console.log(performance.data.data.length);
      console.log(performance.data.kind);

      var reshapedPerformance = ["value", "kind"];
      for(let i=0; i<performance.data.data.length; i++){
        let perf = {
          value: performance.data.data[i].value,
          kind: performance.data.kind[performance.data.data[i].kind]
        }
        reshapedPerformance[i] = perf;
      }
      console.log(reshapedPerformance);
      this.setState({ performance: performance.data });
    }
  }


  render(){
    /*
    var yolo = "not yet";
    const data = this.state.username;
    if(data)
    {
      yolo = data;
      console.log(data);
    }
    */

    return (
      <div>
        <NavigationBar />
        <Home />
      </div>
    );
  }
}

export default App;
