import { useNavigate } from "react-router-dom";
import Form from "../components/auth/Form";
import Nav from "../layout/Nav";
export default function SignInPage() {
  let navigate = useNavigate();
  return (
    <>
      <Nav />
      <main className="flex justify-center">
        <section>
          <h1>Home</h1>
          <Form />
          <p>
            Don't have an account?
            <span onClick={() => navigate("/signup")}> Sign up</span>
          </p>
        </section>
      </main>
    </>
  );
}
