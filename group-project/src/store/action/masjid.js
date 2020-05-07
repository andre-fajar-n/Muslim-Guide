import axios from "axios"

const apiKey = "AIzaSyCCOJg5Yvp9FQ_D19Hr7TP4Lx7PAQaWMDM"
const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?rankby=distance&type=mosque&key=${apiKey}`

export const getMasjid = (lon = '-7.973006', lat = '112.6079458') => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}&location=${lon},${lat}`)
        console.warn("cek di action", response.data)
        dispatch({ type: "GET_MASJID", payload: response.data })
    }
}