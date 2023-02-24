import { useTrips } from "../../utils/store/hooks";
import { Trip } from "../molecules/Trip";

const TripsHistory = () => {
  const trips = useTrips();

  return (
    <>
      <h2 className="m-14 text-center">Your latest trips</h2>
      <div className="flex flex-col items-center gap-5">
        {trips.length !== 0 ? (
          trips.map((trip) => (
            <Trip
              key={trip.id}
              id={trip.id}
              startLocation={trip.startLocation}
              endLocation={trip.endLocation}
              time={trip.time}
              distance={trip.distance}
            />
          ))
        ) : (
          <p>Enter addresses and start journely</p>
        )}
      </div>
    </>
  );
};

export default TripsHistory;
