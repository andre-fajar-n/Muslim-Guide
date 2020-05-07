import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY_GOOGLE_PLACES
const baseUrl = `${process.env.REACT_APP_BASE_URL_GOOGLE_PLACES}${apiKey}`

export const getMasjid = (lon = '-7.973006', lat = '112.6079458') => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}&location=${lon},${lat}`)
        console.warn("cek di action", response.data)
        dispatch({ type: "GET_MASJID", payload: response.data })
    }
}