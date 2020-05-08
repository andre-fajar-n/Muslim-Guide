import React, { Component } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import WaktuSholat from "../components/WaktuSholat"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class ShowWaktuSholat extends Component {
    render() {
        return (
            <div>
                {this.props.isLogin ? (
                    <body id="page-top">
                        <Navigation {...this.props} />
                        <header className="masthead">
                            <WaktuSholat
                                jamSholat={this.props.waktuSholat}
                            />
                        </header>
                        <Footer />
                    </body>
                ) : (
                        <Redirect to={{ pathname: "/signin" }} />
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        masjid: state.masjid,
        waktuSholat: state.waktuSholat,
        userLoc: state.userLocation,
        dataMasjid: state.masjid.masjid,
        isLogin: state.user.isLogin
    }
}

export default connect(mapStateToProps)(ShowWaktuSholat)