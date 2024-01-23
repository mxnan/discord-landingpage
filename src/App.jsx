import { About, Contact, Home } from "./sections";

function App() {
  return (
    <div>
      <Home />
      <div
        className="relative z-10 w-full overflow-x-clip  "
      >
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
