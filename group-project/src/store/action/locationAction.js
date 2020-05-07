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