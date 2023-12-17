import React from "react";
import { getUserInfoURL } from "./utills/constant";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo : {
                name :"",
                location: "",
                avatar_url : "",

            }
        }
       

    }
    
    async componentDidMount () {
        const data = await fetch(getUserInfoURL);
        const jsonData = await data.json();
        this.setState({userInfo: jsonData})


    }
   

    render(){
       
        const {name, location , email} = this.state.userInfo;
        return (
        <div className='user-card'>
            <div className="user-card-text">
                <h3>Name : {name} </h3>
                <h3>Location : {location}</h3>
                <p>👋 Hello, and welcome to my project page! I'm Kajal a dedicated Full Stack Developer with a strong foundation in computer science and a passion for creating innovative web solutions. With a degree earned in 2021 and valuable experience as a Systems Engineer at TCS, I'm excited to take the next step in my career journey.
                Thank you for visiting this page.</p>
            </div>
            <div className="user-card-img">
                <img src={this.state.userInfo.avatar_url} alt="user-img"/>

            </div>
            
           

        </div>
        )
    }
}

export default UserClass;