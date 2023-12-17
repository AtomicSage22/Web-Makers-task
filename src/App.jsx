import { useState } from "react";
import Header from "./components/Header";
import Companies from "./components/Companies";
import "./App.css";
import "./index.css";
import Work from "./components/Work";
import Steps from "./components/Steps";
import Quote from "./components/Quote";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <Companies />
      <Work />
      <Steps/>
      <Quote />
      <Pricing />
      <Questions />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
