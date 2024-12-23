import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex justify-center">
        <section>
          <h1>Home</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
