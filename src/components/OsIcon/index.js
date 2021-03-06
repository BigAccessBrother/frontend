import React from 'react';
import './style.css';

const OsIcon = (props) => {
  let type = 'fas fa-desktop';
  if (props.type) {
    if (props.type.toLowerCase().includes('windows')) {
      type = 'fab fa-windows';
    } else if (props.type.toLowerCase().includes('mac')) {
      type = 'fab fa-apple';
    } else if (props.type.toLowerCase().includes('linux')) {
      type = 'fab fa-linux';
    }
  }
  return (
    <div className='OsIcon'>
      <i className={`${type} fa-3x`} />
    </div>
  );
};

export default OsIcon;
