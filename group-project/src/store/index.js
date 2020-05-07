import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import masjidReducer from "./reducer/masjid";

const rootReducer = combineReducers({
    masjid: masjidReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store