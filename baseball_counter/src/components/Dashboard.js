import React, { Component } from 'react'
const styleBtn = {
    margin: '20px',
    width: '150px',
    height: '25px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '1rem'
}
class Dashboard extends Component {
  constructor(props) {
     super(props);
  }
  render() {

    return (
      <div style={{marginTop: '100px'}}>

        <button style={styleBtn} data-testid='strike-button' onClick={this.props.resetStrikes}><i class="fas fa-times-circle"></i>  Strike</button>

        <button style={styleBtn} data-testid='ball-button'   onClick={this.props.resetBalls}><i class="fas fa-baseball-ball"></i>  Ball</button>

        <button style={styleBtn} data-testid='hit-button'    onClick={this.props.resetHits}>Hit</button>

        <button style={styleBtn} data-testid='foul-button'   onClick={this.props.resetFouls}>Foul</button>

      </div>
    )
  }
}

export default Dashboard;