import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout/>} />
         

      </Routes>
    </Router>
  );
};

export default App;
