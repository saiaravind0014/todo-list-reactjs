import React from 'react';
import { Bio } from './data/data';

import './foot.css'
const Foot = () => {
  return (
    <div className='foot'>
        <div className='logo'>Sai Aravind</div>
        <a className='linkedin' href={Bio.linkedin} target="display">LinkedIn</a>
        <div clasName="copyright">
          &copy; 2024 Sai Aravind. All rights reserved.
        </div>
    </div>
  )
}

export default Foot
