export function showPosition() {
    console.warn('ini sebelum dispatch')
    return async dispatch => {
        await navigator.geolocation.getCurrentPosition((position) => {
            let startPos = position;
            // console.log(position)

            dispatch (

                {
                    type : "GET_USER_LONLAT",
                    latitude : startPos.coords.latitude,
                    longitude : startPos.coords.longitude
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
	console.log('plis donot')
	let p = Math.PI/180;
	// console.log(p)
	let a = 0.5 - Math.cos((lat2-lat1)*p)/2 + Math.cos(lat1*p) * Math.cos(lat2*p) * (1-Math.cos((lon2-lon1)*p))/2
	// console.log(a)
    let res = 12742 * Math.asin(Math.sqrt(a)) * 1000
    return res.toFixed(2)+' meter'
}

export function responseWithDistance(dataObj) {
    // dataAbj

    console.log('response mesjid ', dataObj.data)
    console.log('dddddddddddddddd=======/', dataObj.data.masjid.length)
    if(dataObj.data.masjid.length > 0 ) {
        return dispatch => {
            let arrayMesjid = dataObj.data.masjid.map(elem => {
                console.log('sssssssssss===>',elem.geometry.location.lon)
                return {                        
                    masjidName : elem.name,
                    masjidAlamat : elem.vicinity,
                    jarak : jarak({lat1 : dataObj.lat, lon1: dataObj.lon, lat2 : elem.geometry.location.lat, lon2 : elem.geometry.location.lng})
                }
            })
            console.log('adsadsadsadsadsadsad=======/', arrayMesjid)
        // dispatch => {
            dispatch({
                type : "SET_DATA_WITH_DISTANCE",
                payload : arrayMesjid
            })
            }
        // }
    } else {
        return (dispatch) => {
            dispatch({
                type : "SET_DATA_WITH_DISTANCE",
                payload : []
            })
        }
    }
    

}

// export const getJarak = (lat1, lon1, dataMesjid) => {
//     let data = []
//     let lat1b = lat1
//     let lon1b = lon1
//     dataMesjid.map((elem,) => data.push({
//         nama : elem.name,
//         alamat : elem.vicinity,
//         jarak : () => {
//             let lat2 = elem.geometry.location.lat;
//             let lon2 = elem.geometry.location.lat;
//             let p = Math.PI/180;
//             // console.log(p)
//             let a = 0.5 - Math.cos((lat2-lat1b)*p)/2 + Math.cos(lat1b*p) * Math.cos(lat2*p) * (1-Math.cos((lon2-lon1b)*p))/2
//             // console.log(a)
//             return 12742 * Math.asin(Math.sqrt(a))
//         }
//     }))
// }
