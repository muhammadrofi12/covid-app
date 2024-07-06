import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContainerComponent from "../components/Container/Index";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <ContainerComponent>{children}</ContainerComponent>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
