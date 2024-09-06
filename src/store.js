import { configureStore } from '@reduxjs/toolkit'

import setPaperSlice from './features/setPaperSlice'
import resultSlice from './features/resultSlice'

const store = configureStore({
  reducer: {
    setPaper: setPaperSlice,
    resultSlice: resultSlice,
  },
})

export default store
