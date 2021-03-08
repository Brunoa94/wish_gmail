import { createSlice } from '@reduxjs/toolkit'


export const composeBoxSlice = createSlice({
    name: 'composeBox',
    initialState: {
        composeBoxVisible: false,
        message: "",
        sender: "",
        subject: ""
    },
    reducers: {
        setBoxInvisible: (state) => {
            state.composeBoxVisible = false
        },
        setBoxVisible: (state) => {
            state.composeBoxVisible = true
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setSender: (state, action) => {
            state.sender = action.payload
        },
        setSubject: (state, action) => {
            state.subject = action.payload
        },
        closeBox: (state) => {
            state.message = ""
            state.sender = ""
            state.subject = ""
            state.composeBoxVisible = false
        }
    }
})



export const { setBoxVisible, setBoxInvisible, setMessage, setSender, setSubject, closeBox } = composeBoxSlice.actions;

export default composeBoxSlice.reducer;
