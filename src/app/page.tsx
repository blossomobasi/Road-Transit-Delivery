import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { lobster } from "./layout";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="h-screen w-full">
      <Home />
      <About />
      <GetStarted />
      <Services />
      <Testimonials lobster={lobster} />
      <Footer />
    </div>
  );
};

export default Page;
