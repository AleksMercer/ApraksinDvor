import { configureStore, createSlice } from '@reduxjs/toolkit'

export const AprashkaStateStore = createSlice({
  name: 'aprashkastore',
  
  initialState: {

  },
  
  reducers: {

  },
})


export default configureStore({
  reducer: {
    aprashkastore: AprashkaStateStore.reducer,
  },
})


/*

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mode: true,
    contentValue: '',
    key: cookie
  },
  
  reducers: {
    modeSwap: (state) => { state.mode = !state.mode },
    changeContent: (state, action) => { state.contentValue = action.payload },
    encryptionContent: (state, action) => { state.encryptedContent = action.payload },
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})

*/