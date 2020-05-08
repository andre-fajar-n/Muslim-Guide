import React, { Component } from "react";
import { Link } from "react-router-dom";
import { doLogout } from "../store/action/user";
import { connect } from "react-redux";

class Navigation extends Component {
    postSignout = async () => {
        await this.props.doLogout()
        if (!this.props.is_login) {
            this.props.history.push("/");
        }
    };
    render() {
        console.warn("cek di header", this.props)
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger">Muslim Guide</Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link to="/mosque" className="nav-link js-scroll-trigger">Mosque</Link></li>
                            <li className="nav-item"><Link to="/prayertimes" className="nav-link js-scroll-trigger">Prayer Times</Link></li>
                            <li className="nav-item">
                                <div>
                                    {this.props.isLogin ? (
                                        <Link to="/profil" className="nav-link js-scroll-trigger">Profile</Link>
                                    ) : (
                                            <div></div>
                                        )}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div>
                                    {this.props.isLogin ? (
                                        <Link onClick={() => this.postSignout()} className="nav-link js-scroll-trigger">LogOut</Link>
                                    ) : (
                                            <Link to="/signin" className="nav-link js-scroll-trigger">SignIn</Link>
                                        )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.user,
        isLogin: state.user.isLogin
    };
};

const mapDispatchToProps = {
    doLogout: () => doLogout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);