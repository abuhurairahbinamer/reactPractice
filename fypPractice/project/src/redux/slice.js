import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'',
    password:''
}

const formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{
        addform:(state,action)=>{
           state.name=action.payload.name;
           state.password=action.payload.password

        }
    }
})
export const {addform}=formSlice.actions;
export default formSlice.reducer;

