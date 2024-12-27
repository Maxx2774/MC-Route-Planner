import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useAuth } from "../context/AuthProvider";

export default function HomePage() {
  const { token, userData } = useAuth();
  return (
    <>
      <Nav />
      <main className="flex justify-center">
        <h1>Welcome back, {token.user.user_metadata.username}</h1>
        {/* {userData?.user.user_metadata.test.map((test, i) => (
          <p key={i}>{test}</p>
        ))} */}
      </main>
    </>
  );
}
