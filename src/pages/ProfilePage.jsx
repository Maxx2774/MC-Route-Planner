import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import styles from "../css-modules/pages/profile.module.css";
import { useRef } from "react";
import { supabase } from "../components/auth/client";
export default function ProfilePage() {
  let navigate = useNavigate();
  const { setToken } = useAuth();

  const testRef = useRef();

  const handleAdd = async () => {};

  return (
    <>
      <Nav />
      <main className="flex justify-center">
        <section className={styles.profile}>
          <button
            onClick={() => {
              setToken(null);
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Sign out
          </button>

          <input type="text" ref={testRef} />
          <button onClick={handleAdd}>Add</button>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
