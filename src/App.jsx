import { About, Contact, Headone, Home } from "./sections";

function App() {
  return (
    <div className="relative">
      <Home />
      <div
        className="relative z-20 w-full overflow-x-clip "
      >
        <About />
        <Headone />
        
        <Contact />
      </div>
    </div>
  );
}

export default App;
