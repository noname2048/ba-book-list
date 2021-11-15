import { createSlice } from "@reduxjs/toolkit";

function loadLocalStorage(itemName) {
    const cache = window.localStorage.getItem(itemName);
    let state = [];
    if (cache !== null) {
        state = JSON.parse(cache);
    }
    const ret = state;
    return ret;
}

const initState = loadLocalStorage("bookList");

const bookStore = createSlice({
    name: "bookReducer",
    initialState: initState,
    reducers: {}
})
