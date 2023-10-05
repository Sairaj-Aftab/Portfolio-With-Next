import { Toaster } from "react-hot-toast";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import SliderSection from "./components/SliderSection";
import TestimonialSection from "./components/TestimonialSection";

export default async function Home() {
  const email = ["sairajaftab@gmail.com", "sairajaftab769@gmail.com"];
  const whatsApp = ["+8801881591572"];

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <SliderSection
        firstTitle="Full-Stack Revolutionary"
        title="Hey! I'm Sairaj Aftab"
        desTitle="Fusing Creativity and Technical Skill to Bring Ideas to Life"
      />
      <AboutSection head_title="About Me" />
      <ProjectSection head_title="Projects" />
      <TestimonialSection
        head_title="Testimonial"
        title="fjk kdfjkf sfjkdsfj dkfjdskfjd dkfj teriot"
      />
      <ContactSection
        head_title="Contact Me"
        title2="Let's work together"
        email={email}
        whatsApp={whatsApp}
        address="Cox's Bazar, Chittagong, Bangladesh"
      />
    </main>
  );
}
