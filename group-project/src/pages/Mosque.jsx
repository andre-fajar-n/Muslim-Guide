import React, { Component } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ListMosque from "../components/ListMosque"
import { connect } from "react-redux"

class Mosque extends Component {
    render() {
        // console.warn("cek di page mosque", this.props)
        return (
            <body id="page-top">
                <Navigation />
                <header className="masthead">
                    <div className="main-box">
                        {this.props.masjid.masjid.map((value) =>
                            (
                                <ListMosque
                                    nama={value.name}
                                    alamat={value.vicinity} />

                            ))
                        }
                    </div>

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

export default connect(mapStateToProps)(Mosque)