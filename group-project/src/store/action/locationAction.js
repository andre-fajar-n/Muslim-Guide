export function showPosition() {
    return async dispatch => {
        await navigator.geolocation.getCurrentPosition((position) => {
            let startPos = position;
            dispatch(
                {
                    type: "GET_USER_LONLAT",
                    latitude: startPos.coords.latitude,
                    longitude: startPos.coords.longitude
                }
            )
        });
    }
}

const jarak = (data) => {
    let lat1 = data.lat1;
    let lon1 = data.lon1;
    let lat2 = data.lat2;
    let lon2 = data.lon2;
    let p = Math.PI / 180;
    let a = 0.5 - Math.cos((lat2 - lat1) * p) / 2 + Math.cos(lat1 * p) * Math.cos(lat2 * p) * (1 - Math.cos((lon2 - lon1) * p)) / 2
    let res = 12742 * Math.asin(Math.sqrt(a)) * 1000
    return res.toFixed(2) + ' meter'
}

export function responseWithDistance(dataObj) {
    if (dataObj.data.masjid.length > 0) {
        return dispatch => {
            let arrayMesjid = dataObj.data.masjid.map(elem => {
                if (elem.vicinity === undefined) {
                    elem.vicinity = "Maaf, Alamat Belum Tersedia"
                }
                return {
                    masjidName: elem.name,
                    masjidAlamat: elem.vicinity,
                    jarak: jarak({ lat1: dataObj.lat, lon1: dataObj.lon, lat2: elem.geometry.location.lat, lon2: elem.geometry.location.lng })
                }
            })
            dispatch({
                type: "SET_DATA_WITH_DISTANCE",
                payload: arrayMesjid
            })
        }
        // }
    } else {
        return (dispatch) => {
            dispatch({
                type: "SET_DATA_WITH_DISTANCE",
                payload: []
            })
        }
    }


}
