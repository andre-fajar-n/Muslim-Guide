import React, { Component } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import WaktuSholat from "../components/WaktuSholat"

class ShowWaktuSholat extends Component {
    render() {
        return (
            <body id="page-top">
                <Navigation />
                <header className="masthead">
                    <WaktuSholat />

                </header>
                <Footer />

            </body>

        )
    }
}

export default ShowWaktuSholat