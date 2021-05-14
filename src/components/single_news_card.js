import React from 'react';
import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBNavbarLink } from 'mdb-react-ui-kit';

export default class single_news_card extends React.Component{
    render(){
        return(
        <MDBCard shadow='0' border='dark' background='white' className='mb-3' style={{ maxWidth: '540px' }}>
            <MDBRow className='g-0'>
                <MDBCol md='4' className="border d-flex align-items-center justify-content-center">
                    <MDBCardImage src={this.props.data.multimedia!==null?this.props.data.multimedia[2].url:null} alt='...' fluid />
                </MDBCol>
                <MDBCol md='8'>
                <MDBCardBody>
                    <MDBNavbarLink href={'/read/'+this.props.data.title}>{this.props.data.title}</MDBNavbarLink>
                    <MDBCardText>
                        {this.props.data.description}
                    </MDBCardText>
                    <MDBCardText>
                        <small className='text-muted'>Source: The NewYork Times</small>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>
        );
    }
}
