export function showPosition() {
    console.warn('ini sebelum dispatch')
    return async dispatch => {
        await navigator.geolocation.getCurrentPosition((position) => {
            let startPos = position;
            // console.log(position)
            return dispatch (
                {
                    type : "GET_USER_LONLAT",
                    latitude : startPos.coords.latitude,
                    longitude : startPos.coords.longitude
                }
            )
        });
    }
}