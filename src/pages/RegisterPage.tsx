import Form from "../components/auth/Form";
import Nav from "../layout/Nav";
export default function RegisterPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <Form />
      </main>
    </>
  );
}