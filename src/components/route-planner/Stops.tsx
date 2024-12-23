import styles from "../../css-modules/pages/routeplanner.module.css";
import { useStopsContext } from "../../context/StopsContext";
import { MdModeEdit } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export default function Stops() {
  const { stops, addStop, removeStop, formatTime } = useStopsContext();
  return (
    <section className={styles.stops}>
      <h2 className="text-[2.25rem]">STOPS </h2>
      <button className={styles.addStop}>Add stop</button>
      {stops.map((stop) => (
        <section key={uuidv4()} className={styles.stopBox}>
          <section className={styles.stopBoxInfo}>
            <h2>
              {stop.order}. {stop.location}
            </h2>
            <p className="ml-[30px] text-[1.3rem] mb-[10px] leading-[20px] text-[#BABABA]">
              {stop.distance} km, {formatTime(stop.estTime)}
            </p>
          </section>
          <section className={styles.stopBoxModify}>
            <MdModeEdit
              size={22}
              color="#BABABA"
              className="cursor-pointer mt-[7px] mr-[-7px]"
            />
            <IoReorderThree
              size={40}
              color="#BABABA"
              className="cursor-pointer"
            />
          </section>
        </section>
      ))}
    </section>
  );
}
