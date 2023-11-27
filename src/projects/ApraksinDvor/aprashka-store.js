import { configureStore, createSlice } from '@reduxjs/toolkit'

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {

  },
  
  reducers: {

  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})
