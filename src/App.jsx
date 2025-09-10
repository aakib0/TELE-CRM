import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



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