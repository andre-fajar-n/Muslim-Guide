//page signin
import React, { Component } from "react";
import "../styles-aji/style-login.css";
import { connect } from "react-redux";
import {
  getListUser,
  changeInputUsername,
  changeInputPassword,
  doLogin,
} from "../store/action/user";
import Navigation from "../components/Navigation";

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
    console.warn("cek login", this.props)
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <div className="body-signin">
          <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(el) => this.props.changeInputUsername(el)}
              />
            </div>
            <div className="textbox">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(el) => this.props.changeInputPassword(el)}
              />
            </div>
            <input
              className="btn"
              type="button"
              name="button"
              value="Sign in"
              onClick={this.postLogin}
            />
          </div>
        </div>
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
