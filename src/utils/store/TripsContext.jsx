import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const TripsContext = createContext({});
export const ActionsContext = createContext({});

const TripsProvider = ({ children }) => {
  const [trips, dispatch] = useReducer(reducer, []);

  const selector = (callback) => {
    return callback(trips);
  };

  return (
    <ActionsContext.Provider value={{ dispatch, selector }}>
      <TripsContext.Provider value={trips}>{children}</TripsContext.Provider>
    </ActionsContext.Provider>
  );
};

export default TripsProvider;
