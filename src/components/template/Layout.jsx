import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
