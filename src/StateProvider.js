import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer
export const StateContext = createContext();
//wrap our app and provide data alyre to all component
export const StateProvider = ({ reducer, initailState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initailState)}>
        {children}
    </StateContext.Provider>
);
//data layer mathi information fetch kre chhe
export const useStateValue = () => useContext(StateContext)