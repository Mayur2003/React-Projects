import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "./Components/data";

const Userslice  = createSlice({
    name : "Users",
    initialState : UserData,
    reducers : {
            // adduser : (state,action) => {
            //     state.push(action.payload)
                
            // }
    }   
})

export const {adduser} = Userslice.actions;
export default Userslice.reducer;