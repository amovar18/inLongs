import React from 'react';
import { MDBCard, MDBCardText, MDBCardBody, MDBNavbarLink, MDBRipple, MDBCardTitle } from 'mdb-react-ui-kit';

export default class single_news_card extends React.Component{
    render(){
        return(
            <div>
                <MDBCard border='dark' background='transparent' style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <img src={this.props.data.multimedia!==null?this.props.data.multimedia[0].url:null} className='img-fluid hover-shadow' alt='...'/>
                        <span>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </span>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle><MDBNavbarLink style={{'color': '#242582','textAlign':'justify'}} href={'/read/'+this.props.data.title}>{this.props.data.title}</MDBNavbarLink></MDBCardTitle>
                        <MDBCardText style={{'textAlign':'justify'}}>
                            <small>{this.props.data.abstract} </small>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <br/>
            </div>
        );
    }
}
