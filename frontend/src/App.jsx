import "primereact/resources/themes/soho-light/theme.css";
import "primeicons/primeicons.css";

import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
