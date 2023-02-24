import { useContext } from "react";
import { TripsContext, ActionsContext } from "./TripsContext";

export const useTrips = () => {
  return useContext(TripsContext);
};

export const useDispatch = () => {
  const { dispatch } = useContext(ActionsContext);
  return dispatch;
};

export const useSelector = () => {
  const { selector } = useContext(ActionsContext);
  return selector;
};
