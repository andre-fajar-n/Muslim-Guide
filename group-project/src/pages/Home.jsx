import React, { Component } from "react"
import { getMasjid } from "../store/action/masjid"
import { connect } from "react-redux"

class Home extends Component {
    componentDidMount = async () => {
        this.props.dataMasjid("-7.973006", "112.6079458")
    }
    render() {
        console.warn("cek di home", this.props)
        return (
            <div>

                {/* {this.props} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        masjid: state.masjid
    }
}

const mapDispatchToProps = {
    dataMasjid: (lon, lat) => getMasjid(lon, lat)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)