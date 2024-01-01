"use client"

import { Provider } from "react-redux"
import { store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </Provider>
  )
}