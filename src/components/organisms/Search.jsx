import { useQuery } from "react-query";
import { fetchGeocode } from "../../utils/queries/fetchGeocode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../utils/store/hooks";
import { add } from "../../utils/store/reducer";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../molecules/spinner";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [requestParams, setRequestParams] = useState({
    startAddress: "",
    endAddress: "",
  });

  const { isLoading, data: positions } = useQuery(
    ["geocode", requestParams],
    fetchGeocode
  );

  useEffect(() => {
    if (!positions || positions.lenght === 0) {
      return;
    }

    if (
      (positions[0].lat === positions[1].lat) &
      (positions[0].lng === positions[1].lng)
    ) {
      setStatus("Addresses are the same. Change one of them");
      return;
    }

    console.log(positions);
    const tripId = uuidv4();

    dispatch(
      add(
        tripId,
        [requestParams.startAddress, requestParams.endAddress],
        positions
      )
    );

    navigate(`/map/${tripId}`);
  }, [positions, dispatch, navigate, requestParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      startAddress: formData.get("start-address"),
      endAddress: formData.get("end-address"),
    };
    if (!data.startAddress || !data.endAddress) {
      setStatus("One of the fields are empty. Please enter address");
    }
    setRequestParams(data);
  };

  return (
    <form
      className="m-auto flex w-8/12 max-w-sm flex-col gap-3"
      onSubmit={handleSubmit}
    >
      {isLoading ? <Spinner /> : null}
      <p data-testid="status" className={`${status ? "block" : "hidden"}`}>
        {status}
      </p>
      <label htmlFor="start-address" className="sr-only">
        Start address
      </label>
      <input
        id="start-address"
        name="start-address"
        type="text"
        placeholder="Start address"
        className="input"
        required
      />
      <label htmlFor="end-address" className="sr-only">
        End address
      </label>
      <input
        id="end-address"
        name="end-address"
        type="text"
        placeholder="End address"
        className="input"
        required
      />
      <input type="submit" value="search" className="submit-btn m-auto" />
    </form>
  );
};

export default Search;
