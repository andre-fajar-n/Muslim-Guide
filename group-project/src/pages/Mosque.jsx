import React, { Component } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ListMosque from "../components/ListMosque"

class Mosque extends Component {
    render() {
        return (
            <body id="page-top">
                <Navigation />
                <header className="masthead">
                    <ListMosque />

                </header>
                <Footer />

            </body>

        )
    }
}

export default Mosque