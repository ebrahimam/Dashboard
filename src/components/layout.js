
import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Sidebar />
    </>
  );
};
export default RootLayout