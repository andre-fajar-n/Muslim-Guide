import React from "react"

const WaktuSholat = (props) => {
    return (
        <div className="card card-prayer text-center mt-4">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Daily</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Monthly</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.jamSholat.tglMasehi}</h5>
                    <h5 className="card-title">{props.jamSholat.tglHijriyah}</h5>
                </div>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th>Imsak</th>
                            <td>{props.jamSholat.waktuSholat.Imsak}</td>
                        </tr>
                        <tr>
                            <th>Subuh</th>
                            <td>{props.jamSholat.waktuSholat.Fajr}</td>
                        </tr>
                        <tr>
                            <th>Terbit Fajr</th>
                            <td>{props.jamSholat.waktuSholat.Sunrise}</td>
                        </tr>
                        <tr>
                            <th>Dzuhur</th>
                            <td>{props.jamSholat.waktuSholat.Dhuhr}</td>
                        </tr>
                        <tr>
                            <th>Ashar</th>
                            <td>{props.jamSholat.waktuSholat.Asr}</td>
                        </tr>
                        <tr>
                            <th>Maghrib</th>
                            <td>{props.jamSholat.waktuSholat.Maghrib}</td>
                        </tr>
                        <tr>
                            <th>Isya</th>
                            <td>{props.jamSholat.waktuSholat.Isha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WaktuSholat;