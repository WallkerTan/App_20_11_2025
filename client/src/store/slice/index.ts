import { combineReducers } from "@reduxjs/toolkit";
import filterbgReducer from "./Background"; // đường dẫn đến file slice của bạn

const rootReducer = combineReducers({
    bg: filterbgReducer, // key 'bg' sẽ là tên state trong store
});

export default rootReducer;
