import About from "@/components/Events/About";
import Footer from "@/components/Events/Footer";
import Header from "@/components/Events/Header";

const Events = () => {
  return (
    <main className="min-h-screen bg-black text-white  bg-[url('/assets/event/body-bg.png')] bg-repeat">
      <Header />
      <About />
      <Footer />
    </main>
  );
};
export default Events;
