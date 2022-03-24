import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice';

const store = configureStore({
    // reducer: objet qui regroupe le state, actions, et les fonction qui mettre a jour le state.
    reducer: {
        counter: counterReducer
    },
})
export default store;