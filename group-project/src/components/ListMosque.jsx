import React from "react"

const ListMosque = () => {
    return (
        <div>
            <div class="card card-masjid mb-3 mt-3" style={{ maxWidth: "540px" }} >
                <div class="row">
                    <div class="col-md-4">
                        <img src={require("../images/card-masjid.jpg")} class="card-img" alt="mosque" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Nama Masjid</h5>
                            <p class="card-text">Alamat: Karang Besuki, Malang</p>
                            <p class="card-text">Jarak: 500 m</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card card-masjid mb-3" style={{ maxWidth: "540px" }} >
                <div class="row">
                    <div class="col-md-4">
                        <img src={require("../images/card-masjid.jpg")} class="card-img" alt="mosque" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Nama Masjid</h5>
                            <p class="card-text">Alamat: Karang Besuki, Malang</p>
                            <p class="card-text">Jarak: 500 m</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListMosque;