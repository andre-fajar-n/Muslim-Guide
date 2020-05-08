//page profil
import React, { Component } from "react";
import "../styles-aji/style-profil.css";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";

class Profil extends Component {

  // componentDidMount() {
  //   const tagBody = document.getElementsByTagName('body')[0].setAttribute("style", "background-image : url('../images-aji/bg.jpg') !important;")
  // }

  render() {
    console.warn("cek profil", this.props)
    return (
      <React.Fragment>
        <Navigation />
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

export default connect(mapStateToProps)(Profil);
