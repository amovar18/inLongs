import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Menudropdown from './Menudropdown';
export default class header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showNavColorThird:false
        }
        this.setShowNavColorThird=this.setShowNavColorThird.bind(this);
    }
    setShowNavColorThird(e){
        this.setState({showNavColorThird:!(this.state.showNavColorThird)});
    }
    render(){
        return(
            <MDBNavbar expand='lg'  dark bgColor='primary'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>InLongs</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={this.setShowNavColorThird}>
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={this.state.showNavColorThird} navbar>
                        <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='/'>
                                    All News
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <Menudropdown/>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}