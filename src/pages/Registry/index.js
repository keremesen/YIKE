import React, { Component } from "react";
import fire from '../../config/fire'
import Registry from "./Registry";



export default class index extends Component {

  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }
   
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div>
        <Registry/>
      </div>
          
    );
  }
}
