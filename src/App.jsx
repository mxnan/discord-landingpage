import {
  About,
  Contact,
  Download,
  Home,
  IntroOne,
  IntroThree,
  IntroTwo,
} from "./sections";

function App() {
  return (
    <div className="relative">
      <Home />
      <div className="relative z-20 w-full  overflow-x-clip ">
        <About />
        <IntroOne />
        <IntroTwo />
        <IntroThree />
        <Download />
        <Contact />
      </div>
    </div>
  );
}

export default App;
