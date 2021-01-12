import React, { Component } from "react";
import fire from "../../config/fire";
import { ButtonLink, StyledInput, StyledLogin } from "./RegistryElements";
import swal from 'sweetalert';

export class Registry extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  signup() {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        swal("Mükemmel!", "Kaydınız Başarıyla Alınmıştır", "success");
      })
      .catch((err) => {
        swal(`${err}`)
      });
  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
  render() {
    return (
      <StyledLogin>
        <h2>Kaydol</h2>
        <StyledInput
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          
        />

        <StyledInput
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <ButtonLink onClick={this.signup}>
          Kaydol
        </ButtonLink>
        <h5>Zaten Kayıtlı mısınız?</h5>
        <ButtonLink to ="/login">
        Giriş Yap
        </ButtonLink>
      </StyledLogin>
    );
  }
}

export default Registry
