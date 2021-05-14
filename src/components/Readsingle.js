import React from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Loadingspinner from './Loadingspinner';
import { Redirect } from 'react-router';

export default class Readsingle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            iserror:false,
            fetched:false
        }
    }
    componentDidMount(){
        let component=this;
        axios({
            method:'GET',
            url:'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=headline:("'+component.props.match.params.name+'")&api-key=gwtNpYC2Pa865Bd8s83hcp4QqbkkIqDN'
        }).then((response)=>{
            component.setState({fetched:true});
            component.setState({news:response.data.response.docs[0]});
        }).catch((error)=>{
            component.setState({fetched:true});
            component.setState({iserror:true});
        });
    }
    render(){
        console.log(this.state);
        if (this.state.news.length!==0){
            return(
                <center style={{'height':'100vh'}}>
                    <br/>
                    <MDBCard border='dark' background='transparent' style={{ maxWidth: '22rem' }}>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage border='dark' background='transparent' src={'https://static01.nyt.com/'+this.state.news.multimedia[8].url} position='top' alt='...' />
                                <a href='#'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody border='dark' background='transparent'>
                                <MDBCardTitle style={{'text-align':'justify','text-color':'#ffffff'}} >{this.props.match.params.name} </MDBCardTitle>
                                <br/>
                                <MDBCardText style={{'text-align':'justify'}}>
                                <small>{this.state.news.abstract} </small>
                                </MDBCardText>
                            <MDBBtn href={this.state.news.web_url}>Read more on NYT</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </center>
            );
        }else if(this.state.iserror===true){
            return(
            <div className="border d-flex align-items-center justify-content-center">
                    <h1>Some error occured please reload the page Redirecting to Homepage</h1>{setTimeout(() => {
                        <Redirect to='/'/>
                    }, 1500)}
            </div>);
        }else{
            return (<Loadingspinner/>);
        }
    }
}