import { configureStore, createSlice } from '@reduxjs/toolkit'

export const aprashkaStateStore = createSlice({
  name: 'aprashkaStore',
  
  initialState: {
    firstAccordion: false,
    secondAccordion: false,
    scrollToElement: 'false',
  },
  
  reducers: {
    firstAccordionSwap: (state) => { state.firstAccordion = !state.firstAccordion },
    secondAccordionSwap: (state) => { state.secondAccordion = !state.secondAccordion },
    scrollToElementSwap: (state, action) => { state.scrollToElement = action.payload },
  },
})


export default configureStore({
  reducer: {
    aprashkaStore: aprashkaStateStore.reducer,
  },
})

/* firstAccordionState - boolean value for first Accordion. const firstAccordionState = useSelector(selectFirstAccordion) */
const selectFirstAccordion = (state) => state.aprashkaStore.firstAccordion
/* secondAccordionState - boolean value for second Accordion. const secondAccordionState = useSelector(selectSecondAccordion) */
const selectSecondAccordion = (state) => state.aprashkaStore.secondAccordion
/* scrollToElementState - boolean value for scroll. const scrollToElementState = useSelector(selectScrollToElement) */
const selectScrollToElement = (state) => state.aprashkaStore.scrollToElement


/* Export all selectors */
export { selectFirstAccordion, selectSecondAccordion, selectScrollToElement }
//import { selectFirstAccordion, selectSecondAccordion, scrollToElement } from '../aprashkaStore' // selectors import

/* export reducers-func */
export const { firstAccordionSwap, secondAccordionSwap,  scrollToElementSwap} = aprashkaStateStore.actions
// import { firstAccordionSwap, secondAccordionSwap, scrollToElementSwap } from '../aprashkaStore' // reducers import