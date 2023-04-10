import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

// stores
import { RootState } from '~stores/index'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
