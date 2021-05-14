import React from 'react';
import Singlenewscard from './single_news_card';
import axios from 'axios';
import Loadingspinner from './Loadingspinner';
import { Redirect } from 'react-router-dom';
export default class Categorical extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            category:this.props.match.params.category,
            iserror:false,
            fetched:false
        }
    }
    componentDidMount(){
        let component=this;
        axios({
            method:'GET',
            url:'https://api.nytimes.com/svc/topstories/v2/'+component.props.match.params.category+'.json?api-key=gwtNpYC2Pa865Bd8s83hcp4QqbkkIqDN'
        }).then((response)=>{
            component.setState({fetched:true});
            component.setState({news:response.data.results});
        }).catch((error)=>{
            component.setState({fetched:true});
            component.setState({iserror:true});
        });
    }
    render(){
        if(this.state.iserror===true){
            return(
                <div style={{'height':'100vh'}}className="border d-flex align-items-center justify-content-center">
                    <h1>Some error occured please reload the page redirecting to homepage</h1>{setTimeout(() => {
                        <Redirect to='/'/>
                    }, 1500)}
                </div>
            );
        }else if(this.state.fetched===true){
            return(
                <div>
                    <center>
                        <br/>
                        {this.state.news.map((news,idx)=>{
                            return(<Singlenewscard key={idx} data={news}/>);
                        })}
                    </center>
                </div>
            );
        }else{
            return(<Loadingspinner/>);
        }
    }
}