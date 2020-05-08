import React from "react"

const WaktuSholat = (props) => {
    return (
        <div className="card card-prayer text-center mt-4">
            <div className="card-header card-header-prayer">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Daily</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Monthly</a>
                    </li>
                </ul>
            </div>
            <div className="card-body card-body-prayer">
                <div className="d-flex justify-content-between">

                    <h5 className="card-title">{props.jamSholat.tglMasehi} Masehi</h5>
                    <h5 className="card-title">{props.jamSholat.tglHijriyah} Hijriyah</h5>
                </div>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th className="pray-time">Imsak</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Imsak}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Subuh</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Fajr}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Terbit Fajr</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Sunrise}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Dzuhur</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Dhuhr}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Ashar</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Asr}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Maghrib</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Maghrib}</td>
                        </tr>
                        <tr>
                            <th className="pray-time">Isya</th>
                            <td className="pray-hour">{props.jamSholat.waktuSholat.Isha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WaktuSholat;