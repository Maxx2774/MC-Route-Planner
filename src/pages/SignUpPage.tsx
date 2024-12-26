import Form from "../components/auth/Form";
import Nav from "../layout/Nav";
export default function SignUpPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center mt-[50px]">
        <Form />
      </main>
    </>
  );
}
