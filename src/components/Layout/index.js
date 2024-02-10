// Write your code here
import {Component} from "react"
import Header from "../Header"
import Body from "../Body"
import "./index.css"

class Layout extends Component{
    state = {
        listOfPeople:[
        {
            name:"sai chaitayna",
            nickname:"sai",
            age:40,
            gender:"male",
            phone:9984722123,
            email:"raju@gmail.com",
            id:1,
        },
         {
            name:"nagendra reddy",
            nickname:"nagi",
            age:20,
            gender:"male",
            phone:9347306234,
            email:"raju@gmail.com",
            id:2,
        }
         {
            name:"vishnu vardhan",
            nickname:"vish",
            age:33,
            gender:"male",
            phone:9704444896,
            email:"raju@gmail.com",
            id:3;
        }
        
    ]
    }

    render(){
        const {listOfPeople}=this.state
        return(
            <div className="people-container">
            <Header/>
                <ul className="ul-container">
                    {listOfPeople.map(each => <Body key={}/>)}
                </ul>
            </div>
        )

    }
}