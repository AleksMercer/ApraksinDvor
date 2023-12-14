import { configureStore, createSlice } from '@reduxjs/toolkit'

export const globalStateStore = createSlice({
  name: 'store',
  
  initialState: {
    mainclass: '',
  },
  
  reducers: {
    mainClassSwap: (state, action) => { state.mainclass = action.payload },
  },
})


export default configureStore({
  reducer: {
    store: globalStateStore.reducer,
  },
})


/* const mainClassState = useSelector(selectMainClass) */
const selectMainClass = (state) => state.store.mainclass

/* Export all selectors */
export { selectMainClass }
//import {  selectMainClass } from '../../store' // selectors import

/* export reducers-func */
export const { mainClassSwap } = globalStateStore.actions
// import { mainClassSwap } from '../../store' // reducers import