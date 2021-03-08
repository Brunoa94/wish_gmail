import { configureStore } from '@reduxjs/toolkit'
import composeBoxSlice from './composeBoxSlice'

export default configureStore({
    reducer: {
        composeBoxSlice: composeBoxSlice
    }
})