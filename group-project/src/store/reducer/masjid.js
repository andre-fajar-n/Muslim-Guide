const initialState = {
    masjid: []
}

export default function masjidReducer(stateMasjid = initialState, action) {
    switch (action.type) {
        case "GET_MASJID":
            return {
                ...stateMasjid,
                masjid: action.payload
            }
        default:
            return stateMasjid
    }
}