import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY_GOOGLE_PLACES
const baseUrl = `${process.env.REACT_APP_BASE_URL_GOOGLE_PLACES}&key=${apiKey}`

export const getMasjid = (lon, lat) => {
    return async (dispatch) => {
        const responseMasjid = await axios.get(`https://cors-anywhere.herokuapp.com/${baseUrl}&location=${lon},${lat}`)
        console.warn("cek masjid", responseMasjid.data.results)
        dispatch({ type: "GET_MASJID", payload: responseMasjid.data.results })
    }
}
