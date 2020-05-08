import React from "react"

const ListMosque = (props) => {
    return (
        <div>
            <div class="card card-masjid mb-3 mt-3 card-scroll-mosque" style={{ maxWidth: "540px" }} >
                <div class="row">
                    <div class="col-md-4">
                        <img src={require("../images/card-masjid.jpg")} class="card-img" alt="mosque" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div className="col-12">
                                <strong>
                                {props.nama}
                                </strong>
                            </div>
                            <div className="col-12">
                                <small>
                                    {props.alamat}

                                </small>
                            </div>
                            <div className="col-12">
                                <strong>
                                {props.jarak}
                                </strong>
                            </div>
                            {/* <h5 class="card-title">{props.nama}</h5> */}
                            {/* <p class="card-text">{props.alamat}</p>
                            <p class="card-text">{props.jarak}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListMosque;