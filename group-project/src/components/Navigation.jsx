import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger">Muslim Guide</Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link to="/mosque" className="nav-link js-scroll-trigger">Mosque</Link></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Qibla</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Prayer Times</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Location</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;