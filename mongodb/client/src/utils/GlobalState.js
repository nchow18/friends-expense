import React from "react"
import { reducer, initialState } from "./reducer"
import Auth from './auth';

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null
})


export const Category = React.createContext(Auth.getCategories)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </UserContext.Provider>
  )
}

