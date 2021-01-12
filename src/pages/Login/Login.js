import React, { Component } from 'react'
import fire from '../../config/fire';
import Products from '../ProductList';
import { ButtonLink, StyledInput, StyledLogin } from "./LoginElements";
import swal from 'sweetalert';



export var userEmail="";

export class Login extends Component {
    constructor(props){
        super(props);
        this.login= this.login.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.state={
            email:"",
            password:"",
            isLogin:"false",
        }
    }
    login(){
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{
        this.setState({isLogin: true})
        userEmail= this.state.email;
          

        }).catch((err)=>{
           swal(`${err}`)
            
            this.setState({isLogin: false})
            
        })
    }
   
   

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 


    render() {
        if(this.state.isLogin===true){
            
            return <Products/>
        }
      

            return (
                <StyledLogin>
          <h2>Giriş Yap</h2>
          <StyledInput 
          type="email"
          id="email"
          name="email"
          placeholder="email" 
          onChange={this.handleChange}
          value={this.state.email}
          />
    
          <StyledInput
          type="password" 
          id="password"
          name="password"
          placeholder="password" 
          value={this.state.password}
          onChange={this.handleChange}
          />

         <ButtonLink onClick={this.login}>Giriş Yap</ButtonLink>
          <h5>Henüz Hesabınız yok mu ? </h5>
          <ButtonLink to='/registry'>Kaydol</ButtonLink>
                
        </StyledLogin>
            )
        
       
        
       
       
    }
    
}
export default Login

