import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getListUser,
  changeInputUsername,
  changeInputPassword,
  doLogin,
} from "../store/action/user";

class SignIn extends Component {
  componentDidMount = async () => {
    await this.props.getListUser();
  };

  postLogin = async () => {
    await this.props.doLogin();
    console.log(this.props.isLogin);
    if (this.props.isLogin) {
      this.props.history.push("/profil");
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(el) => el.preventDefault()}>
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(el) => this.props.changeInputUsername(el)}
          />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={(el) => this.props.changeInputPassword(el)}
          />
          <br />
          <br />
          <button onClick={this.postLogin}>submit</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.inputNamaLengkap,
    password: state.user.inputPassword,
    isLogin: state.user.isLogin,
    listUser: state.user.listUser,
  };
};

const mapDispatchToProps = {
  changeInputUsername: (e) => changeInputUsername(e),
  changeInputPassword: (e) => changeInputPassword(e),
  getListUser: getListUser,
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
