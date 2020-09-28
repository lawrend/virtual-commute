import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <form className='journey-input'>
      <div>
      <input placeholder="starting location" onChange={props.handleStartChange} value={props.startingLocation} className="starting-location"/>
    </div>
    <Link to="/map"><button type="submit" id="journey-button"></button></Link>
    <div>
      <input placeholder="ending location" onChange={props.handleEndChange} value={props.endingLocation} className="ending-location"/>
    </div>
    </form>
  </div>
)


