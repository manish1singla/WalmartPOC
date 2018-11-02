import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Capital from './components/Capital'
import ScheduleTaskRisk from './components/ScheduleTaskRisk'
import Logoimg from "./walmart.JPG";
import ProjectSchedule from "./components/ProjectSchedule";
import FinancialPerformance from "./components/FinancalPerformance";



class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
            <img  src={Logoimg}  alt="fireSpot" className="imgsize"/>
            <h1>Construction Management</h1>

        </header>
          <h2 className="capital">Business Summary</h2>
          <div>
          <Capital />
          <ProjectSchedule/>
          <ScheduleTaskRisk/>
              <FinancialPerformance/>


          </div>
      </div>
    );
  }
}

export default App;
