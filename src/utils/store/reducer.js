import { createTrip, updateTrip } from "./trips";

export const add = (id, locations, positions) => {
  return {
    type: "trips/add",
    payload: {
      id,
      locations,
      positions,
    },
  };
};

export const update = (id, properties) => {
  return {
    type: "trips/update",
    payload: {
      id,
      ...properties,
    },
  };
};

export const reducer = (trips, action) => {
  if (action.type === "trips/add") {
    const trip = createTrip(
      action.payload.id,
      action.payload.locations,
      action.payload.positions
    );
    return [...trips, trip];
  }

  if (action.type === "trips/update") {
    const { id, ...properties } = action.payload;
    return updateTrip(trips, id, properties);
  }

  //   if (action.type === remove.type) {
  //     return removeItem(trips, action.payload.id);
  //   }

  return trips;
};
