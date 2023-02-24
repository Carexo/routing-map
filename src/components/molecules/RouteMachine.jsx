import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useDispatch } from "../../utils/store/hooks";
import { update } from "../../utils/store/reducer";

const RoutineMachineLayer = ({ tripId, startAddress, endAddress }) => {
  const dispatch = useDispatch();

  const instance = L.Routing.control({
    waypoints: [
      [startAddress.lat, startAddress.lng],
      [endAddress.lat, endAddress.lng],
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: false,
    collapsible: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  instance.on("routesfound", (event) => {
    const routes = event.routes;

    const { totalDistance: distance, totalTime: time } = routes[0].summary;

    console.log(routes[0]);

    dispatch(
      update(tripId, {
        distance: Math.round(distance / 10) / 100,
        time: Math.round((time / 60) * 100) / 100,
      })
    );
  });

  return instance;
};

const RouteMachine = createControlComponent(RoutineMachineLayer);

export default RouteMachine;
