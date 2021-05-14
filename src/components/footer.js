import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import credits from '../../src/poweredby_nytimes_200c.png';

export default function footer() {
  return (
    <MDBFooter className='text-white text-center text-lg-left' style={{'position':'fixed','bottom':'0','width':'100%','backgroundColor':'#2F2FA2'}}>
      <div className='text-center p-3' style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.2)' }}>
        <a href='https://developer.nytimes.com/'><img src={credits} alt='No img'/></a>
      </div>
    </MDBFooter>
  );
}