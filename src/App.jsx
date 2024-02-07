import { About, Contact,  Home, Intro } from "./sections";

function App() {
  return (
    <div className="relative">
      <Home />
      <div
        className="relative z-20 w-full overflow-x-clip "
      >
        <About />
        <Intro />
        
        <Contact />
      </div>
    </div>
  );
}

export default App;
