const initStretState = {
    latitude : '',
    longitude : '',
    location : '',
}

const stretReducer = (streetState = initStretState, action) => {
    switch (action.type) {
        case "GET_LONLAT_FROM_LOC" : 
            return {
                ...streetState,
                latitude : action.lonlat.lat,
                longitude : action.lonlat.lng,
                location : action.location
            }

        default :
        return {
            ...streetState
        }
    }

}


export default stretReducer;