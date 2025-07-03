import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Aboutme from "./components/section/Aboutme";
import Contact from "./components/section/Contact";
import Home from "./components/section/Home";
import Portfolio from "./components/section/Portfolio";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* Toolbar */}
      <Toolbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-[75vh] pt-16 flex flex-col justify-center"
        >
          <Home />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-[75vh] pt-16 flex flex-col justify-center"
        >
          <Aboutme />
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="min-h-[75vh] pt-16 flex flex-col justify-center"
        >
          <Portfolio />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-[75vh] pt-16 flex flex-col justify-center"
        >
          <Contact />
        </section>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
