export const createTrip = (id, locations, positions) => {
  return {
    id,
    startLocation: {
      name: locations[0],
      lat: positions[0].lat,
      lng: positions[0].lng,
    },
    endLocation: {
      name: locations[1],
      lat: positions[1].lat,
      lng: positions[1].lng,
    },
    price: 0,
    time: 0,
    distance: 0,
  };
};

export const updateTrip = (trips, id, updates) => {
  return trips.map((trip) => {
    if (trip.id === id) {
      return { ...trip, ...updates };
    }
    return trip;
  });
};
