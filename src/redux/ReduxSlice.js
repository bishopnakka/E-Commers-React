import { createSlice } from "@reduxjs/toolkit";

const ReduxSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const item= action.payload
            const exist=state.items.find(i=> i.id === item.id)
            
            if(exist){
                exist.qty + 1;
            }else{
                state.items.push({...item,qty:1})
            }
            console.log(item)
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter(p=>p.id !== action.payload)
        },
        clearCart:(state) => {
            state.items=[]
        },
    },
})

export const {addToCart,removeFromCart,clearCart} = ReduxSlice.actions
export default ReduxSlice.reducer