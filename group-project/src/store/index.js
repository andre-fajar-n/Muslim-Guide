import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk"
import masjidReducer from "./reducer/masjid";
import waktuSholatReducer from "./reducer/waktuSholat";
import userReducer from "./reducer/user";
import locationReducer from "./reducer/locationReducer";

const rootReducer = combineReducers({
    masjid: masjidReducer,
    waktuSholat: waktuSholatReducer,
    user: userReducer,
    userLocation : locationReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store
