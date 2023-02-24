import { Link } from "react-router-dom";

export const Trip = ({ id, startLocation, endLocation }) => {
  return (
    <Link
      to={`/map/${id}`}
      className="  w-10/12 max-w-md gap-5 rounded-md bg-darkBlue py-4 text-center sm:text-lg"
    >
      From <span className="font-medium "> {startLocation.name} </span>
      to
      <span className="font-medium "> {endLocation.name}</span>
    </Link>
  );
};
