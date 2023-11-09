import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const loginStateSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    loggedIn(state, action) {
      // const { user } = action.payload
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      console.log(state.loggedIn)
      state.loggedIn = true
    },
    loggedOut(state, action) {
        state.user = null
        state.loggedIn = false
    }
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { loggedIn, loggedOut } = loginStateSlice.actions

// Export the slice reducer as the default export
export default loginStateSlice.reducer