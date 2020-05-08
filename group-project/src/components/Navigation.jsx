import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        // console.warn("cek di header", this.props.masjid.masjid)
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger">Muslim Guide</Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link to="/mosque" className="nav-link js-scroll-trigger">Mosque</Link></li>
                            <li className="nav-item"><Link to="/prayertimes" className="nav-link js-scroll-trigger">Prayer Times</Link></li>
                            <li className="nav-item"><Link to="/profil" className="nav-link js-scroll-trigger">Profile</Link></li>
                            <li className="nav-item"><Link to="/signin" className="nav-link js-scroll-trigger">SignIn</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;