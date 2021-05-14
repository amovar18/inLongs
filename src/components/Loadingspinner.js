import React from 'react';
import { MDBSpinner,MDBBtn } from 'mdb-react-ui-kit';

export default function Loadingspinner() {
  return (
        <div style={{'height':'100vh'}}className="border d-flex align-items-center justify-content-center">
            <MDBBtn disabled>
              <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
              Loading...
            </MDBBtn>
        </div>
  );
}