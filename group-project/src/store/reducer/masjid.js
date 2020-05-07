const initialStateMasjid = {
    masjid: []
}

export default function masjidReducer(stateMasjid = initialStateMasjid, action) {
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