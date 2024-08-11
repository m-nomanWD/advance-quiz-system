import { configureStore } from '@reduxjs/toolkit'

import setPaperSlice from './features/setPaperSlice'

const store = configureStore({
  reducer: {
    setPaper: setPaperSlice,
  },
})

export default store
