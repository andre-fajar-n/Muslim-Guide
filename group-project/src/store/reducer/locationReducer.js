const initLocationState = {
    userlatitude : '',
    userlongitude : '',
    dataWithDistance : []
}

export default function locationReducer(locationState = initLocationState, action) {
    switch (action.type) {
        case "GET_USER_LONLAT" : 
            return {
                ...locationState,
                userlatitude : action.latitude,
                userlongitude : action.longitude
            }

        case "SET_DATA_WITH_DISTANCE" :
            return {
                ...locationState,
                dataWithDistance : action.payload
            }

        default :
            return {
                ...locationState
            }
    }

}

