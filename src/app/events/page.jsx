import About from "@/components/Events/About";
import Footer from "@/components/Events/Footer";
import Header from "@/components/Events/Header";

const Events = () => {
  return (
    <main className="min-h-screen  bg-[url('/assets/event/group.png')] bg-repeat">
      <Header />
      <About />
      <Footer />
    </main>
  );
};
export default Events;
