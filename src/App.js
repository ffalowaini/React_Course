import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters'
import React, { Component } from "react";

class App extends Component{
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  reset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handelIncrement = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === counterId) counter.value++;
      return counter;
    });
    this.setState({ counters });
  };
  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length}/>
        <main className='container'>
          <Counters counters={this.state.counters} onReset={this.reset} onDelete={this.handelDelete} onIncrement={this.handelIncrement}/>
        </main>
      </React.Fragment>
      );
  }
  
  
}

export default App;
