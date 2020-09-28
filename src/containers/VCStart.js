import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VC.css';

function VCStart() {
  return (
    <header className="VC-header">
      <p>miss my commute</p>
        <p className='start'>get commute time back</p>
        <p className="VC-link">
          <Link to="make-plans">
            Let's Go
        </Link>
        </p>

    </header>
    );
}

export default VCStart;
