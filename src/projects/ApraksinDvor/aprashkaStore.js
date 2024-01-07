import { configureStore, createSlice } from '@reduxjs/toolkit'

export const aprashkaStateStore = createSlice({
  name: 'aprashkaStore',
  
  initialState: {
    firstAccordion: false,
    secondAccordion: false,
    scrollToContrast: 'false',
  },
  
  reducers: {
    firstAccordionSwap: (state) => { state.firstAccordion = !state.firstAccordion },
    secondAccordionSwap: (state) => { state.secondAccordion = !state.secondAccordion },
    scrollToContrastSwap: (state, action) => { state.scrollToContrast = action.payload },
  },
})


export default configureStore({
  reducer: {
    aprashkaStore: aprashkaStateStore.reducer,
  },
})

/* firstAccordionState - boolean value for first Accordion.     const firstAccordionState = useSelector(selectFirstAccordion) */
const selectFirstAccordion = (state) => state.aprashkaStore.firstAccordion
/* secondAccordionState - boolean value for second Accordion.  const secondAccordionState = useSelector(selectSecondAccordion) */
const selectSecondAccordion = (state) => state.aprashkaStore.secondAccordion
/* scrollToContrastState - boolean value for scroll from icons > color to colors > contrast.  const scrollToContrastState = useSelector(selectScrollToContrast) */
const selectScrollToContrast = (state) => state.aprashkaStore.scrollToContrast


/* Export all selectors */
export { selectFirstAccordion, selectSecondAccordion, selectScrollToContrast }
//import { selectFirstAccordion, selectSecondAccordion, scrollToContrast } from '../aprashkaStore' // selectors import

/* export reducers-func */
export const { firstAccordionSwap, secondAccordionSwap,  scrollToContrastSwap} = aprashkaStateStore.actions
// import { firstAccordionSwap, secondAccordionSwap, scrollToContrastSwap } from '../aprashkaStore' // reducers import