import Search from "../components/organisms/Search";
import TripsHistory from "../components/organisms/TripsHistory";

const Home = () => {
  return (
    <div>
      <h2 className="my-5 text-center">Calculate the cost of the trip</h2>
      <Search />
      <TripsHistory />
    </div>
  );
};

export default Home;
