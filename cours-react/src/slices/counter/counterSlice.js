import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  // Objet qui nous sert à initialiser le state du compteur
  initialState: {
    valeur: 0,
    message: "Salut",
  },
  reducers: {
    increment: (state) => {
      console.log("Incrementer");
      state.valeur += 1
    },
    decrement: (state) => {
      state.valeur -= 1
    },
    incrementByAmount: (state, action) => {
      state.valeur += action.payload
    },
  },
})

console.log("counterSlice: ", counterSlice);

// const action = {
//     type: 'INCREMENTER',
//     payload: 20
// }

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer