import React, { Component } from 'react'
import Display from './Display';
import Dashboard from './Dashboard';

export default class Container extends Component {
    state = {
       balls: 0,
       strikes:0,
       fouls:0,
       hits:0
    }
  
    resetBalls = event => {
      event.preventDefault();
      if (this.state.balls >= 3 ) {
          this.setState({
              balls: 0,
              strikes: 0
          })
      }
      else{
          this.setState({
              ...this.state,
              balls:this.state.balls + 1
          })
      }
  
  };
  
    resetStrikes = (event) => {
      event.preventDefault();
      if (this.state.strikes >= 2) {
          this.setState({
              ...this.state,
              balls: 0,
              strikes: 0
          })
      }
      else {
          this.setState({
              balls: this.state.balls,
              strikes: this.state.strikes + 1
          })
      }
  };
  
  resetHits = event=> {
      event.preventDefault()
      this.setState({
          balls: 0,
          strikes:0
      })
  };
  
    resetFouls = event => {
      event.preventDefault();
      if (this.state.strikes < 2) {
          this.setState({
              ...this.state,
              strikes: this.state.strikes + 1
          })
      }
  };
  
    render() {
      return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <Display  balls={this.state.balls}
                      strikes={this.state.strikes} 
                      />

            <Dashboard resetBalls={this.resetBalls}
                      resetStrikes ={this.resetStrikes}
                      resetHits={this.resetHits}
                      resetFouls={this.resetFouls}
                      />
            
        </div>
      )
    }
  }