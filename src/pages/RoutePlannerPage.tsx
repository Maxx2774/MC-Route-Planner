import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import SideBarRoutePlanner from "../components/route-planner/SideBarRoutePlanner";
export default function RoutePlannerPage() {
  return (
    <>
      <Nav />
      <main>
        <SideBarRoutePlanner />
      </main>
      <Footer />
    </>
  );
}
