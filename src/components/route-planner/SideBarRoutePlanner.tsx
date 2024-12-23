import SideBar from "../../layout/SideBar";
import styles from "../../css-modules/pages/routeplanner.module.css";
import Form from "./Form";
import Stops from "./Stops";
export default function SideBarRoutePlanner() {
  return (
    <SideBar className={styles.sidebar}>
      <h1 className="text-[#5BBFFE] my-[20px]">ROUTE PLANNER</h1>
      <Form />
      <Stops />
    </SideBar>
  );
}
