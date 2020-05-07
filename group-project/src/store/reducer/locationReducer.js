const initLocationState = {
    userlatitude : '',
    userlongitude : ''
}

export default function locationReducer(locationState = initLocationState, action) {
    switch (action.type) {
        case "GET_USER_LONLAT" : 
            return {
                ...locationState,
                userlatitude : action.latitude,
                userlongitude : action.longitude
            }

        default :
            return {
                ...locationState
            }
    }

}
