import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

export const getWaktuSholat = (lon, lat) => {
    return async (dispatch) => {
        const responseWaktu = await axios.get(`${baseUrl}&longitude=${lon}&latitude=${lat}`)
        console.warn("cek waktu sholat", responseWaktu.data.data)
        dispatch({ type: "GET_WAKTU_SHOLAT", payload: responseWaktu.data.data })
    }
}