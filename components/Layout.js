import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[40px] mb-[100px]"> {children}</div>
      <Footer />
    </>
  );
};

export default Layout;
