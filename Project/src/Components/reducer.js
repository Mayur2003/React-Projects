import { createSlice } from "@reduxjs/toolkit";
import { Proprtydata } from "./data";

const useslice = createSlice({
    name : "users",
    initialState : Proprtydata,

})

export default useslice.reducer;