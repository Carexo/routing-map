import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-purple flex w-full justify-center bg-darkBlue p-5 text-lightGray">
      <Link to="/">
        <h1 className="text-4xl font-bold">Routing Map</h1>
      </Link>
    </header>
  );
};

export default Header;
