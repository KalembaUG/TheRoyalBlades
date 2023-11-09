import loginReducer from './features/logIn/loginSlice'
// import { apiSlice } from '../features/api/apiSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    login: loginReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(apiSlice.middleware)
})