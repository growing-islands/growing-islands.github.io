import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction, Action } from '@reduxjs/toolkit'

// slices
import { headerSlice } from './Header'

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
