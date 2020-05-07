import React from "react"

const WaktuSholat = () => {
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
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default WaktuSholat;