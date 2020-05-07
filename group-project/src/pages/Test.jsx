import React, { Component } from "react"
import { getMasjid } from "../store/action/masjid"
import { connect } from "react-redux"
import { getWaktuSholat } from "../store/action/waktuSholat"
import { showPosition } from "../store/action/locationAction"

class Test extends Component {
    componentDidMount = async () => {
        this.props.dataWaktu("112.6079458", "-7.973006")

    }

    trigerFunction = async () => {
        await this.props.showPosition()
        console.log('ini user loc', this.props.userLoc)
        await this.props.dataMasjid(`${this.props.userLoc.userlatitude}`, `${this.props.userLoc.userlongitude}`)
        await this.props.dataWaktu(`${this.props.userLoc.userlatitude}`, `${this.props.userLoc.userlongitude}`)
    }

    render() {
        console.warn("cek di Test", this.props)
        return (
            <div>
                <div className="test">

                </div>
                <button
                    onClick={() => this.trigerFunction()}
                >
                    Click Me
                </button>
                {/* {this.props} */}
            </div>
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

const mapDispatchToProps = {
    dataMasjid: (lon, lat) => getMasjid(lon, lat),
    dataWaktu: (lon, lat) => getWaktuSholat(lon, lat),
    showPosition: showPosition,
    // getJarak
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)