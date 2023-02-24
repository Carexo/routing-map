import { useDispatch } from "../../utils/store/hooks";
import { update } from "../../utils/store/reducer";
import { generatePDF } from "../../utils/generatePDF";
import { useState } from "react";

const TripSummary = ({
  id,
  distance,
  time,
  price,
  startLocation,
  endLocation,
}) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");

  const distanceCost = Math.round(price * distance * 1.1 * 100) / 100;
  const drivingCost = Math.ceil(distance / 800) * 1000;

  const handleChange = (event) => {
    dispatch(update(id, { price: Math.abs(event.target.value) }));
  };

  const handleClick = () => {
    try {
      generatePDF({
        id,
        distance,
        distanceCost,
        drivingCost,
        startLocation,
        endLocation,
        time,
        price,
      });
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <>
      <h2 className="my-8 text-center">
        From {startLocation.name} to {endLocation.name}
      </h2>
      <div className="m-5 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-16">
        <div className="flex flex-col gap-1">
          <p>Distance: {distance} km</p>
          <p>Cost per kilometer: {price || 0} $/km</p>
          <p>
            Time: {Math.round(time / 60) ? `${Math.round(time / 60)} h` : ""}{" "}
            {Math.round(time % 60)} min
          </p>
          <p>Price for distane: {distanceCost} $</p>
          <p>
            Price for driving: {drivingCost / 1000} day * 1000 ={" "}
            {Math.ceil(distance / 800) * 1000} $
          </p>
          <p>
            Total cost:{" "}
            <b>{Math.round((distanceCost + drivingCost) * 100) / 100} $</b>
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-6">
          <label className="flex items-center gap-5">
            Price per kilometer
            <input
              type="number"
              className="input"
              placeholder="0"
              min="0"
              onChange={handleChange}
              value={price || ""}
            />
          </label>
          <button onClick={handleClick} className="submit-btn item w-48 ">
            Generate PDF
          </button>
          {status ? <p className="font-bold ">{status}</p> : null}
        </div>
      </div>
    </>
  );
};

export default TripSummary;
