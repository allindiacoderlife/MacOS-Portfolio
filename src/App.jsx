import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Dock, Navbar, Welcome } from "#components";
import { Safari, Terminal, Resume, Finder } from "#windows";

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
    </main>
  );
};

export default App;
