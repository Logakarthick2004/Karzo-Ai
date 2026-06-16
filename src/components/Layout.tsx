import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SplineCorner from "./SplineCorner";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Layout = () => {
  const { pathname } = useLocation();
  useSmoothScroll();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SplineCorner />
    </div>
  );
};

export default Layout;
