import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
const links=[
    {title:'Automobiles',path:'/automobiles'},{title:'Business',path:'/business'},{title:'Movies',path:'/movies'},{title:'Art',path:'/art'},
    {title:'Health',path:'/health'},{title:'Sports',path:'/sports'},{title:'Technology',path:'/technology'}
    ,{title:'Politics', path:'/politics'},{title:'Science', path:'/science'},{title:'World', path:'/world'}
]
export default class Homepage extends React.Component{
    render(){
        return(
        <MDBDropdown>
            <MDBDropdownToggle style={{'backgroundColor':'#2F2FA2'}}>Categories</MDBDropdownToggle>
                <MDBDropdownMenu>
                {links.map(({title,path})=>{
                    return(
                        <MDBDropdownItem>
                            <MDBDropdownLink key={title} href={path}>{title}</MDBDropdownLink>
                        </MDBDropdownItem>
                    );
                })}
            </MDBDropdownMenu>
        </MDBDropdown>
        );
    }
}