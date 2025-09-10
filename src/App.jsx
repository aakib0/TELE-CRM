import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
}

export default App;