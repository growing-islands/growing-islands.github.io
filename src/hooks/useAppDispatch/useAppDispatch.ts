import { useDispatch } from 'react-redux'

// stores
import { AppDispatch } from '~stores/index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>()
