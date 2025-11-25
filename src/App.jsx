import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Dock, Navbar, Welcome, Home } from "#components";
import { Safari, Terminal, Resume, Finder, Text, Image, Contact } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      
      <Home />
    </main>
  );
};

export default App;
