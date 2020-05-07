import React, { Component } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import WaktuSholat from "../components/WaktuSholat"
import { connect } from "react-redux"

class ShowWaktuSholat extends Component {
    render() {
        console.warn("cek waktu sholat", this.props)
        return (
            <body id="page-top">
                <Navigation />
                <header className="masthead">
                    <WaktuSholat
                        jamSholat={this.props.waktuSholat}
                    />

                </header>
                <Footer />

            </body>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        masjid: state.masjid,
        waktuSholat: state.waktuSholat,
        userLoc: state.userLocation,
        dataMasjid: state.masjid.masjid
    }
}

export default connect(mapStateToProps)(ShowWaktuSholat)