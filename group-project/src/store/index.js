import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk"
import masjidReducer from "./reducer/masjid";
import waktuSholatReducer from "./reducer/waktuSholat";
import userReducer from "./reducer/user";

const rootReducer = combineReducers({
    masjid: masjidReducer,
    waktuSholat: waktuSholatReducer,
  user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store
