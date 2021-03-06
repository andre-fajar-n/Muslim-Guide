import React, { Component } from "react"
import { getMasjid } from "../store/action/masjid"
import { connect } from "react-redux"
import { getWaktuSholat } from "../store/action/waktuSholat"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Link, Redirect } from "react-router-dom"
import { showPosition, responseWithDistance } from "../store/action/locationAction"

class Home extends Component {
    trigerFunction = async () => {
        await this.props.showPosition()
        await this.props.dataMasjid(`${this.props.userLoc.userlatitude}`, `${this.props.userLoc.userlongitude}`)
        await this.props.dataWaktu(`${this.props.userLoc.userlongitude}`, `${this.props.userLoc.userlatitude}`)
        await this.props.responseWithDistance({
            lat: this.props.userLoc.userlatitude,
            lon: this.props.userLoc.userlongitude,
            data: this.props.masjid
        })
    }

    render() {
        return (
            <div>
                {this.props.isLogin ? (
                    <body id="page-top">
                        <Navigation {...this.props} />
                        <header className="masthead">
                            <div className="container h-100">
                                <div className="row h-100 align-items-center justify-content-center text-center">
                                    <div className="col-lg-10 align-self-end">
                                        <h1 className="text-uppercase text-white font-weight-bold">السلام عليكم ورحمة الله وبركاته</h1>
                                        <hr className="divider my-4" />
                                    </div>
                                    <div className="col-lg-8 align-self-baseline">
                                        <p className="text-white-75 font-weight-light mb-5">Muslim Guide can help you find nearest mosque from your location.<br />Don't miss your prayers by activating notification!</p>
                                        <Link className="btn-home btn-primary btn-xl js-scroll-trigger"
                                            onClick={() => this.trigerFunction()}
                                        >
                                            Mosque Near Me
                                </Link>
                                        <div>
                                            {this.props.masjid.masjid.length > 0 ? (
                                                <div>
                                                    <div className="double-click mt-2">We already got your location!</div>
                                                    <div className="double-click mt-2">Go to Mosque and see Prayer Times!</div>
                                                </div>
                                            ) : (
                                                    <div className="double-click mt-2">Double click the button!</div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
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

const mapDispatchToProps = {
    dataMasjid: (lon, lat) => getMasjid(lon, lat),
    dataWaktu: (lon, lat) => getWaktuSholat(lon, lat),
    showPosition: () => showPosition(),
    responseWithDistance: responseWithDistance
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)