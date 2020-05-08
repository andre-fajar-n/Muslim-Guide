import axios from 'axios'

//

const apiUrl = process.env.REACT_APP_STREET_API_URL
const apiKey = process.env.REACT_APP_STREET_API_KEY

// get lon lat fungsi untuk mendapatkan lon lat berdasarkan nama tempat yang di kirim, nama tempat harus detail
// contoh "sukun,malang", "keputih,surabaya"
export const getLonLat = (location) => {
    return async (dispatch) => {
        let respon = await axios.get(apiUrl+'key='+apiKey+'&location='+location)
        dispatch({
            type : "GET_LONLAT_FROM_LOC",
            location : respon.data.result[0].providedLocation.location,
            lonlat : respon.data.result[0].locations[0].latLng
        })
    }
} 