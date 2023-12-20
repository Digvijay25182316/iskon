// Import necessary dependencies
import React, { createContext, useReducer, useContext } from "react";

// Step 1: Create a new context
const MyContext = createContext();

// Step 2: Create a reducer function
const myReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Step 3: Create a Context Provider component
const MyProvider = ({ children }) => {
  // Use useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(myReducer, { data: null });

  // Define the context value with state and dispatch
  const contextValue = { state, dispatch };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Step 4: Create a custom hook to access the context value
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};

export default MyProvider;
