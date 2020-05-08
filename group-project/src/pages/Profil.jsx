//page profil
import React, { Component } from "react";
import "../styles-aji/style-profil.css";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { Redirect } from "react-router-dom";

class Profil extends Component {
  render() {
    console.warn("cek profil", this.props)
    return (
      <div>
        {this.props.isLogin ? (

          <React.Fragment>
            <Navigation {...this.props} />
            <div className="profil-body">
              <div className="profil-card">
                <img
                  src={this.props.dataUser.avatar}
                  alt="foto-profil"
                  style={{ width: "100%" }}
                />
                <h1>{this.props.dataUser.nama_lengkap}</h1>
                <p className="profil-title">{this.props.dataUser.email}</p>
                <p>
                  <button className="profil-button">
                    {this.props.dataUser.username}
                  </button>
                </p>
              </div>
            </div>
          </React.Fragment>
        ) : (
            <Redirect to={{ pathname: "/signin" }} />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    isLogin: state.user.isLogin
  };
};

export default connect(mapStateToProps)(Profil);
