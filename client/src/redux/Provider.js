import React from 'react'
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

const context = React.createContext(null)

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(context)
export const useDispatch = createDispatchHook(context)
export const useSelector = createSelectorHook(context)

const myStore = createStore(rootReducer)

export function MyProvider({ children }) {
  return (
    <Provider context={context} store={myStore}>
      {children}
    </Provider>
  )
}