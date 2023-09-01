import {createSlice} from '@reduxjs/toolkit';

const themSlice=createSlice({
    name:'them',
    initialState:{
        dark:false
    },
    reducers:{
       light:(state)=>{
            state.dark=false
       },
       dark:(state)=>{
        state.dark=true
       },
       togle:(state)=>{
        state.dark=!state.dark
       }

    
    }});

    export const {dark, light, togle}=themSlice.actions;

 const themReducer= themSlice.reducer;
 
 export default themReducer;