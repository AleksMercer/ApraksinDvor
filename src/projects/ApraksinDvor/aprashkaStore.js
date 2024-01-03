import { configureStore, createSlice } from '@reduxjs/toolkit'

export const aprashkaStateStore = createSlice({
  name: 'aprashkaStore',
  
  initialState: {
    firstAccordion: false,
    secondAccordion: false,
  },
  
  reducers: {
    firstAccordionSwap: (state) => { state.firstAccordion = !state.firstAccordion },
    secondAccordionSwap: (state) => { state.secondAccordion = !state.secondAccordion },
  },
})


export default configureStore({
  reducer: {
    aprashkaStore: aprashkaStateStore.reducer,
  },
})

/* selectMode - boolean value for first Accordion.     const modeState = useSelector(selectMode) */
const selectFirstAccordion = (state) => state.aprashkaStore.firstAccordion
/* selectCopyTip - boolean value for second Accordion.  const copyTipState = useSelector(selectCopyTip) */
const selectSecondAccordion = (state) => state.aprashkaStore.secondAccordion


/* Export all selectors */
export { selectFirstAccordion, selectSecondAccordion }
//import { selectFirstAccordion, selectSecondAccordion } from '../aprashkaStore' // selectors import

/* export reducers-func */
export const { firstAccordionSwap, secondAccordionSwap } = aprashkaStateStore.actions
// import { firstAccordionSwap, secondAccordionSwap } from '../aprashkaStore' // reducers import