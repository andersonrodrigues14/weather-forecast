import { combineReducers } from "redux";
import CitiesReducer from "./CitiesReducer";

export default combineReducers({
    cities: CitiesReducer
});