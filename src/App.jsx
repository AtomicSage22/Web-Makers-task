import { useState } from "react";
import Header from "./components/Header";
import Companies from "./components/Companies";
import "./App.css";
import "./index.css";
import Work from "./components/work";
import Steps from "./components/Steps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <Companies />
      <Work />
      <Steps/>
    </main>
  );
}

export default App;
