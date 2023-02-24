import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "../utils/store/hooks";
import { useEffect } from "react";
import TripSummary from "../components/organisms/TripSummary";
import MapRoute from "../components/organisms/Map";

const RouteMap = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const select = useSelector();
  const trip = select((trips) => trips.find((trip) => trip.id === id));

  useEffect(() => {
    if (!trip) {
      navigate("/");
    }
  }, [trip, navigate]);

  if (!trip) {
    return <div>There was no trip with id {id}</div>;
  }

  return (
    <div>
      <MapRoute
        tripId={trip.id}
        startLocation={trip.startLocation}
        endLocation={trip.endLocation}
      />
      <TripSummary
        id={trip.id}
        time={trip.time}
        distance={trip.distance}
        price={trip.price}
        startLocation={trip.startLocation}
        endLocation={trip.endLocation}
      />
    </div>
  );
};

export default RouteMap;
