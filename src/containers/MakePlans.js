import React, { Component } from 'react';
import JourneyInput from '../components/JourneyInput';
import '../css/journey-form.css';

class MakePlans extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startingLocation: '',
      endingLocation: '',
    }
  }

  handleStartChange = (e) => {
    this.setState({startingLocation: e.target.value})
  }

  handleEndChange = (e) => {
    this.setState({endingLocation: e.target.value})
  }

  render() {
    return (
      <div className='journey-form'>
        <JourneyInput handleStartChange={this.handleStartChange} handleEndChange={this.handleEndChange} startingLocation={this.state.startingLocation} endingLocation={this.state.endingLocation} />
      </div>
    );
  }
}

export default MakePlans;

