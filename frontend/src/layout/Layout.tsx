import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {

  return (
    <>
      {/* 머리말 */}
      <Header />
      {/* 내용 */}
      <main className="container mx-auto mt-8 px-3">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
