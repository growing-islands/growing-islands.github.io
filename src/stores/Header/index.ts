import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '~stores/index'

interface HeaderState {
  height: number
}

const initialState: HeaderState = {
  height: 0,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderHeight: (state, action: PayloadAction<HeaderState['height']>) => {
      state.height = action.payload
    },
  },
})

export const { setHeaderHeight } = headerSlice.actions

export const selectHeaderHeight = ({
  header,
}: RootState): HeaderState['height'] => header.height
